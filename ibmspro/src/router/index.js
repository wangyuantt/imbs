import Vue from 'vue'
import Router from 'vue-router'
// components
import Index from '@/pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/index',
      name: 'Index',
      component: Index
    }
  ]
})
