// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// 组件
import App from './App'
// Vue路由
import router from './router'
// Vuex
import store from './store/index'
// ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import './style/theme.scss'
import './style/common.scss'
import './assets/iconfont/iconfont.css'
// Axos基本请求
import $vueHttp from './axiosRequest/axiosRequest'

import * as filters from './filter/filter'
import $util from './utils/utils'
import moment from 'moment'

//模块化API请求
import * as $commonAPI from './api/commonAPI/commonApi'
import * as $parkingLotAPI from './api/parkingLotAPI/InfoQueryApi'
import * as $visitorManagementAPI  from './api/onePassAPI/visitorManagementApi'

Vue.use(ElementUI, { size: 'small', zIndex: 2000 });
// Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$util = $util
Vue.prototype.$moment = moment
Vue.prototype.$vueHttp = $vueHttp
Vue.prototype.$commonAPI = $commonAPI
Vue.prototype.$parkingLotAPI = $parkingLotAPI
Vue.prototype.$visitorManagementAPI = $visitorManagementAPI

Object.keys(filters).forEach(key => {
  Vue.filter(key,filters[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
