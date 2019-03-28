// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRresource from 'vue-resource'
Vue.use(VueRresource);

import jquery from 'jquery'
import './assets/css/normalize.css'
import './assets/plugins/bootstrap-3.3.7-dist/css/bootstrap.min.css'
import './assets/plugins/bootstrap-3.3.7-dist/js/bootstrap'
import './assets/css/animate.css'

import './assets/css/index.css'
import Amap from 'vue-amap';
Vue.use(Amap);

import store from './store/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false


const userKey = 'siteUser';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})

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
