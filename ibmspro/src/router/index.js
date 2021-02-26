import Vue from 'vue'
import Router from 'vue-router'
// components
import Index from '@/pages/index'
import Login from '@pages/Login'

// 车辆管控配置
import vehicleControlConfig from '@pages/vehicleControlConfig/vehicleControlConfig'
import parameterConfig from '@pages/vehicleControlConfig/parameterConfig/parameterConfig'
import parkingGarage from '@pages/vehicleControlConfig/parkingGarage/parkingGarage'

// 车辆管控 - 停车场信息查询
import informationQuery from '@pages/parkingLot/InformationQuery'
import vehicleInformationQuery from '@pages/parkingLot/VehicleInformationQuery/VehicleInformationQuery'


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

// 一卡通--访客管理
import visitorManagement from '@pages/onePass/visitorManagement/visitorManagement'
// 一卡通--访客管理--访客预约
import visitorAppointment from '@pages/onePass/visitorManagement/visitorAppointment/visitorAppointment'
// 一卡通--访客管理--来访记录
import visitRecord from '@pages/onePass/visitorManagement/visitRecord/visitRecord'
// 一卡通--访客管理--异常访客记录
import abnormalVisitorRecord from '@pages/onePass/visitorManagement/abnormalVisitorRecord/abnormalVisitorRecord'
// 一卡通--访客管理--访客权限下载记录
import visitorpermissionDownloadRecord from '@pages/onePass/visitorManagement/visitorpermissionDownloadRecord/visitorpermissionDownloadRecord'

// 视频监控
import videoSurveillance from '@pages/videoSurveillance/videoSurveillance'
// 视频监控 - 实时预览
import realTimePreview from '@pages/videoSurveillance/realTimePreview/realTimePreview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/imbsPlatform',
      alias: '/index',
      name: 'Index',
      component: Index,
      redirect:'/imbsPlatform/informationQuery',
      children: [
        {
          path: 'informationQuery',
          name: 'informationQuery',
          meta: { showTitle: true, title: '车辆管控', subTitle: '', currentPageTitle: '停车场信息查询' },
          component: informationQuery,
        },
        {
          path: 'vehicleInformationQuery',
          name: 'vehicleInformationQuery',
          meta: { showTitle: true, title: '车辆管控', subTitle: '', currentPageTitle: '车辆信息查询' },
          component: vehicleInformationQuery,
        },
        {
          path: 'alarmDetection',
          name: 'alarmDetection',
          meta: { showTitle: true, title: '报警检测', subTitle: '', currentPageTitle: '入侵报警' },
          component: alarmDetection,
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
            },
            {
              path: 'visitorManagement',
              name: 'visitorManagement',
              meta: { showTitle: true, title: '一卡通', subTitle: '访客管理', currentPageTitle: '' },
              component: visitorManagement,
              children: [
                {
                  path: 'visitorAppointment',
                  name: 'visitorAppointment',
                  meta: { showTitle: true, title: '一卡通', subTitle: '访客管理', currentPageTitle: '访客预约' },
                  component: visitorAppointment
                },
                {
                  path: 'visitRecord',
                  name: 'visitRecord',
                  meta: { showTitle: true, title: '一卡通', subTitle: '访客管理', currentPageTitle: '来访记录' },
                  component: visitRecord
                },
                {
                  path: 'abnormalVisitorRecord',
                  name: 'abnormalVisitorRecord',
                  meta: { showTitle: true, title: '一卡通', subTitle: '访客管理', currentPageTitle: '异常访客记录' },
                  component: abnormalVisitorRecord
                },
                {
                  path: 'visitorpermissionDownloadRecord',
                  name: 'visitorpermissionDownloadRecord',
                  meta: { showTitle: true, title: '一卡通', subTitle: '访客管理', currentPageTitle: '访客权限下载记录' },
                  component: visitorpermissionDownloadRecord
                }
              ]
            }
          ]
        },
        {
          path: 'videoSurveillance',
          name: 'videoSurveillance',
          meta: { showTitle: true, title: '视频监控', subTitle: '', currentPageTitle: '' },
          component: videoSurveillance,
          children: [
            {
              path: 'realTimePreview',
              name: 'realTimePreview',
              meta: { showTitle: true, title: '视频监控', subTitle: '', currentPageTitle: '实时预览' },
              component: realTimePreview,
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
