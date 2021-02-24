/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-21 15:10:58 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-24 22:09:28
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        AppInfo: {
            author: 'Wang Yuan',
            email: 'wonyuan168@qq.com',
            creationTime: '1613891660322M20200220',
            version: '1.0.0'
        },
        navMenuList:[
            {
                index: '1-1',
                name: 'informationQuery',
                path: '/vehicleControlConfigModule/informationQuery'
            },
            {
                index: '2-1',
                name: 'alarmDetection',
                path: '/vehicleControlConfigModule/alarmDetection'
            },
            {
                index: '3-1-1',
                name: 'permissionConfigComprehensiveQuery',
                path: '/vehicleControlConfigModule/onePass/accessControl/permissionConfigComprehensiveQuery'
            },
            {
                index: '3-1-2',
                name: 'permissionDownloadRecord',
                path: '/vehicleControlConfigModule/onePass/accessControl/permissionDownloadRecord'
            },
            {
                index: '3-1-3',
                name: 'equipmentEvent',
                path: '/vehicleControlConfigModule/onePass/accessControl/equipmentEvent'
            },
            {
                index: '3-2',
                name: 'personnaIssuing',
                path: '/vehicleControlConfigModule/onePass/personnaIssuing'
            }
        ]
    }, 
    // store 的计算属性，就像计算属性computed一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
    getters: {
        
    },
    // Actions Action 提交的是 mutation，而不是直接变更状态。
    // Action 可以包含任意异步操作。
    actions: {
        
    },
    // 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
    // 一条重要的原则就是要记住 mutation 必须是同步函数
    // Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
    // 这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数，载荷（Payload）作为第二个参数
    // 在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读
    // mutation 可以直接通过 store.commit 来触发一个mutation，推荐使用对象的提交风格
    // store.commit({
    //     type: 'statisticalInterfaceRequest',
    //     amount: 10
    //  })
    mutations: {
        
    }
})

export default store