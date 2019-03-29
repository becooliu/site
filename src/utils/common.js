//给vue 扩展全局的通用函数
'use strict'
const Vue = require('vue');
export default {
	install(Vue){
		//设置cookie,增加到vue实例方便全局调用
		//vue全局调用的理由是，有些组件所用到的接口可能需要session验证，session从cookie获取
		//如果session保存到vuex的话除外
		Vue.prototype.setCookie = function (cookieName, cookieValue, expireDays) {
			var exdate = new Date();
			exdate.setDate(exdate.getDate() + expireDays);
			document.cookie = cookieName + "=" + escape(cookieValue) +
				((expireDays == null) ? 1 : ";path=/; expires=" + exdate.toGMTString())
		};

		//获取cookie、
		Vue.prototype.getCookie = function (name) {
			var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
			if (arr != null) {
				return unescape(arr[2]);
			}
			return null;

		}
		//删除cookie
		Vue.prototype.delCookie = function (name) {
			var exp = new Date();
			exp.setTime(exp.getTime() - 1);
			var cval = this.getCookie(name);
			if (cval != null)
				document.cookie = name + "=" + cval + ";path=/;expires=" + exp.toGMTString();
		}

		Vue.prototype.setLocalStorage = (key , val) => {
			localStorage.setItem(key, val);
		}

		Vue.prototype.delLocalStorage = (key) => {
			localStorage.removeItem(key);
		}

		Vue.prototype.getLocalStorage = (key) => {
			return localStorage.getItem(key);
		}

		//设置localStorage
		Vue.prototype.setTokenLocalStorage = function (token) {
			localStorage.setItem('token', token)
		}

		//格式化时间字符串
		Vue.prototype.formatDate = function(str,type) {
			switch (type) {
			  case 'yyyy':
			  return new Date(str).getFullYear();
			  break;
			  
			  case 'mm-dd':
			  var month = new Date(str).getMonth()+1< 10 
						  ? '0'+new Date(str).getMonth()+1
						  : new Date(str).getMonth()+1;
			  return month +'.'+ new Date(str).getDate();
			  break;
		  
			  default:
			  break;
			}
		  }
		  //扩展校验是否是手机号和邮箱的方法
		  Vue.prototype.IsMobile = function (m) {
			var p = /^1[3456789][0-9]{9}$/gi;
			return p.test(m);
		  }
		  Vue.prototype.IsEmail = function(email){
		  var p = /\s*\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*\s*/;
		  return p.test(email);
		  }
		  
		  //检验是否登录
		  Vue.prototype.checkIsLogin = function () {
			return localStorage.getItem(userKey);
		  }
	}
}
 