/*
 * @Author: Wang Yuan
 * @Date: 2021-03-02 11:06:50
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-03-02 11:30:28
 */
import * as IMBS_SERVER_API from './interface'

// 登录
export const userLogin = (params = {}) => {
  return IMBS_SERVER_API.post('/app/login', params)
}
