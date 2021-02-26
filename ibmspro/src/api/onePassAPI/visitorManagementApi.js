/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-25 15:45:31
 * @Desc: 一卡通--访客管理模块  
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-26 20:30:15
 */
import * as IMBS_SERVER_API from '../interface'

// 访客预约记录
export const appointmentRecords = (params = {}) => {
    return IMBS_SERVER_API.post("/hikisecurecenter/appointment/records", params)
}
// 来访记录
export const visitRecord = (params = {}) => {
    return IMBS_SERVER_API.post("/hikisecurecenter/visiting/records", params)
}
// 访客权限下载记录
export const visitorPerDownRecQry = (params = {}) => {
    return IMBS_SERVER_API.post("/hikisecurecenter/auth/result", params)
}