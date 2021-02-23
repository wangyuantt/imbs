import Vue from 'vue'
import Router from 'vue-router'
// components
import Index from '@/pages/index'
import Login from '@pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
