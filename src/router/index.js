import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/index/Home'
import Example from '@/pages/index/Example'
import News from '@/pages/news/news'


Vue.use(Router)

export default new Router({
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
    }
  ]
})
