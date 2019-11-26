import Vue from 'vue'
import Router from 'vue-router'

import routeConfig from './modules'

Vue.use(Router)

const mode = process.env.NODE_ENV === 'development' ? 'hash':'history'

export default new Router({
  mode: mode,
  scrollBehavior: () => ({ y: 0 }),
  routes: routeConfig
})