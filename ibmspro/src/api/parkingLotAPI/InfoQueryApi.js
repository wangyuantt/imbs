/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-25 20:44:39
 * @Desc: 停车场--信息查询
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-25 20:46:52
 */
import * as IMBS_SERVER_API from '../interface'

// 过车记录查询
export const passedVehRecQry = (params = {}) => {
    return IMBS_SERVER_API.post("/hikisecurecenter/crossRecords/page", params)
}