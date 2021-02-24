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

// 报警检测-入侵报警
import alarmDetection from '@pages/alarmDetection/alarmDetection'

// 一卡通
import onePass from '@pages/onePass/onePass'
// 一卡通--门禁管理
import accessControl from '@pages/onePass/accessControl/accessControl'
// 一卡通--门禁管理--权限配置综合查询
import permissionConfigComprehensiveQuery from '@pages/onePass/accessControl/permissionConfigComprehensiveQuery/permissionConfigComprehensiveQuery'
// 一卡通--门禁管理--权限下载记录
import permissionDownloadRecord from '@pages/onePass/accessControl/permissionDownloadRecord/permissionDownloadRecord'
// 一卡通--门禁管理--设备事件
import equipmentEvent from '@pages/onePass/accessControl/equipmentEvent/equipmentEvent'
// 一卡通--人员发卡
import personnaIssuing from '@pages/onePass/personneIssuing/personnaIssuing'

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
          path: 'alarmDetection',
          name: 'alarmDetection',
          meta: { showTitle: true, title: '报警检测', subTitle: '', currentPageTitle: '入侵报警' },
          component: alarmDetection,
        },
        {
          path: 'informationQuery',
          name: 'informationQuery',
          meta: { showTitle: true, title: '停车场', subTitle: '', currentPageTitle: '信息查询' },
          component: informationQuery,
        },
        {
          path: 'onePass',
          name: 'onePass',
          meta: { showTitle: true, title: '一卡通', subTitle: '', currentPageTitle: '' },
          component: onePass,
          children: [
            {
              path: 'accessControl',
              name: 'accessControl',
              meta: { showTitle: true, title: '一卡通', subTitle: '门禁管理', currentPageTitle: '' },
              component: accessControl,
              children: [
                {
                  path: 'permissionConfigComprehensiveQuery',
                  name: 'permissionConfigComprehensiveQuery',
                  meta: { showTitle: true, title: '一卡通', subTitle: '门禁管理', currentPageTitle: '权限配置综合查询' },
                  component: permissionConfigComprehensiveQuery,
                },
                {
                  path: 'permissionDownloadRecord',
                  name: 'permissionDownloadRecord',
                  meta: { showTitle: true, title: '一卡通', subTitle: '门禁管理', currentPageTitle: '权限下载记录' },
                  component: permissionDownloadRecord,
                },
                {
                  path: 'equipmentEvent',
                  name: 'equipmentEvent',
                  meta: { showTitle: true, title: '一卡通', subTitle: '门禁管理', currentPageTitle: '设备事件' },
                  component: equipmentEvent,
                }
              ]
            },
            {
              path: 'personnaIssuing',
              name: 'personnaIssuing',
              meta: { showTitle: true, title: '一卡通', subTitle: '人员发卡', currentPageTitle: '' },
              component: personnaIssuing,
            }
          ]
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
