/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-27 01:19:42
 * @Desc: 视频监控模块
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-27 01:21:17
 */
import * as IMBS_SERVER_API from '../interface'

// 查询监控点列表
export const getCameraList = (params = {}) => {
    return IMBS_SERVER_API.post("/hikisecurecenter/camera/advance/cameraList", params)
}