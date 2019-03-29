// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRresource from 'vue-resource'
Vue.use(VueRresource);

import Common from './utils/common';
Vue.use(Common);

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


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})