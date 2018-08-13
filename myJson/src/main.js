// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router'
import Highlight from './utils/Highlight.js'
import $ from 'jquery'
//import './assets/js/jsonFormater.js'
import './assets/css/jsonFormater.css'
// import './assets/css/common.css'

Vue.use(Highlight)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
