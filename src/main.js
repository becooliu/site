// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRresource from 'vue-resource'

import jquery from 'jquery'
import './assets/css/normalize.css'
import './assets/plugins/bootstrap-3.3.7-dist/css/bootstrap.min.css'
import './assets/plugins/bootstrap-3.3.7-dist/js/bootstrap'

import './assets/css/index.css'

Vue.config.productionTip = false

Vue.use(VueRresource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
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
