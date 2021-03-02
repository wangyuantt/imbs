/*
 * @Author: Wang Yuan
 * @Date: 2021-03-02 11:06:50
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-03-02 23:07:18
 */
import * as IMBS_SERVER_API from './interface'

// 登录
export const userLogin = (params = {}) => {
  return IMBS_SERVER_API.post('/app/login', params)
}
// 过车记录查询
export const passedRecoedList = (params = {}) => {
  return IMBS_SERVER_API.post('/hikisecurecenter/crossRecords/page', params)
}
// 获取停车库列表
export const parkingGarageList = (params = {}) => {
  return IMBS_SERVER_API.post('/hikisecurecenter/park/parkList', params)
}
// 获取出入口列表
export const entranceList = (params = {}) => {
  return IMBS_SERVER_API.post('/hikisecurecenter/entrance/entranceList', params)
}
// 车辆信息查询
export const vehicleList = (params = {}) => {
  return IMBS_SERVER_API.post('/hikisecurecenter/vehicle/advance/vehicleList', params)
}
// 停车账单查询
export const quickPreBill = (params = {}) => {
  return IMBS_SERVER_API.post('/hikisecurecenter/pay/quickPreBill', params)
}
