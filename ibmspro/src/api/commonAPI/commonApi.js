/*
 * @Author: Wang Yuan 
 * @Description: 公共服务接口
 * @Date: 2021-02-20 17:57:02 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-20 18:05:18
 */
import * as IMBS_SERVER_API from '../interface'

//登录
export const userLogin = (params = {}) => {
    return IMBS_SERVER_API.post("/login/test", params)
}