import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/index/Home'
import Example from '@/pages/index/Example'
import News from '@/pages/news/news'
import About from '@/pages/aboutus/About'
import Team from '@/pages/team/Team'
import Contact from '@/pages/contact/Contact'

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
    }
  ]
})
