import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import store from './store'
import router from './router'

import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/test.css'
import './assets/style/scss/main.scss'

import guid from './util/uuid.js'
import http from './util/http.js'

Vue.use(ElementUI)

Vue.prototype.$http = http

Vue.guid = Vue.prototype.$guid = guid
var vm = new Vue({
  el: '#app',
  store,
  router,
  render: (h) => h(App)
})