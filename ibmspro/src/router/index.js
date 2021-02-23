import Vue from 'vue'
import Router from 'vue-router'
// components
import Index from '@/pages/index'
import Login from '@pages/Login'

// 车辆管控配置
import vehicleControlConfig from '@pages/vehicleControlConfig/vehicleControlConfig'
import parameterConfig from '@pages/vehicleControlConfig/parameterConfig/parameterConfig'
import parkingGarage from '@pages/vehicleControlConfig/parkingGarage/parkingGarage'

// 停车场-信息查询
import informationQuery from '@pages/parkingLot/InformationQuery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/vehicleControlConfigModule',
      alias: '/index',
      name: 'Index',
      component: Index,
      children: [
        {
          path: 'informationQuery',
          name: 'informationQuery',
          meta: { showTitle: true, title: '停车场', subTitle: '', currentPageTitle: '信息查询' },
          component: informationQuery,
        },
        {
          path: 'vehicleControlConfig',
          name: 'vehicleControlConfig',
          meta: { showTitle: true, title: '车辆管控配置', subTitle: '', currentPageTitle: '' },
          component: vehicleControlConfig,
          children: [
            {
              path: 'parkingGarage',
              name: 'parkingGarage',
              meta: { showTitle: true, title: '车辆管控配置', subTitle: '停车场', currentPageTitle: '停车库' },
              component: parkingGarage
            },
            {
              path: 'parameterConfig',
              name: 'parameterConfig',
              meta: { showTitle: true, title: '车辆管控配置', subTitle: '停车场', currentPageTitle: '参数配置' },
              component: parameterConfig
            }
          ]
        }
      ]
    }
  ]
})
