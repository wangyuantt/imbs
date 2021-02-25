/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-25 15:45:31
 * @Desc: 一卡通--访客管理模块  
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-25 16:13:18
 */
import * as IMBS_SERVER_API from '../interface'

// 访客权限下载记录
export const userLogin = (params = {}) => {
    return IMBS_SERVER_API.post("/login/test", params)
}