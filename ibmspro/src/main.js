// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// 组件
import App from './App'

// Vue路由
import router from './router'

// 请求配置
import $vueHttp from './axiosRequest/axiosRequest'


Vue.config.productionTip = false
Vue.prototype.$vueHttp = $vueHttp

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
