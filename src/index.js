import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import './assets/style/test.css'

import guid from './util/uuid.js'
import http from './util/http.js'

Vue.prototype.$http = http

Vue.guid = Vue.prototype.$guid = guid
var vm = new Vue({
  el: '#app',
  store,
  router,
  render: (h) => h(App)
})