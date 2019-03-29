import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/index/Home'
import Example from '@/pages/index/Example'
import News from '@/pages/news/news'
import About from '@/pages/aboutus/About'
import Team from '@/pages/team/Team'
import Contact from '@/pages/contact/Contact'
import Admin from '@/pages/Admin/index'
import Login from '@/user/Login'
import Regist from '@/user/Regist'

Vue.use(Router)

const g_data = require('../utils/global');
const userKey = g_data.userKey;

import store from '../store/store.js';

const vueRouter = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/case',
      name: 'case',
      component: Example
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },{
      path: '/contact',
      name: 'contact',
      component: Contact
    },{
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: {
        requireAuth: true,
        showHeaderFooter: false //不显示网站头部和底部
      }
    },{
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        showHeaderFooter: false
      }
    },{
      path: '/regist',
      name: 'Regist',
      component: Regist,
      meta: {
        showHeaderFooter: false
      }
    }
    
  ]
})

vueRouter.beforeEach((to ,from , next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (localStorage.getItem(userKey)) {
      next();
    }else {
      console.log('请先登录。')
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })

    }
  }else {
    store.commit('$_setIsLogin', true)
    next();
  }
  //根据路由元信息判断是否显示网站共用的头部和底部
  if(to.matched.some(record => record.meta.showHeaderFooter == false)) {
    store.state.showHeaderFooter = false;
  }else {
    store.state.showHeaderFooter = true;
  }

  
})

export default vueRouter;