/*
 * @Author: Wang Yuan 
 * @Description: 公共服务接口
 * @Date: 2021-02-20 17:57:02 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-25 19:59:59
 */
import * as IMBS_SERVER_API from '../interface'

//登录
export const userLogin = (params = {}) => {
    return IMBS_SERVER_API.post("/login/test", params)
}
// 获取停车库列表
export const getParkList = (params = {}) => {
    return IMBS_SERVER_API.post("/hikisecurecenter/park/parkList", params)
}
// 获取出入口列表
export const getEntranceList = (params = {}) => {
    return IMBS_SERVER_API.post("/hikisecurecenter/entrance/entranceList", params)
}