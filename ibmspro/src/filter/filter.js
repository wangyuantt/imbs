/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-25 21:57:25 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-25 22:38:10
 */
import moment from 'moment'

// ISO8601 时间转还
export const ISO8601Format = val => {
    return moment(val).format('YYYY-MM-DD h:mm:ss')
}
// 车辆类型
export const vehicleType = status => {
    switch (status) {
        case 0:
            return '其他车'
            break;
        case 1:
            return '小型车'
            break;
        case 2:
            return '大型车'
            break;
        case 3:
            return '摩托车'
            break;
    }
}
// 放行结果
export const releaseResult = status => {
    switch (status) {
        case 0:
            return '未放行'
            break;
        case 1:
            return '正常放行'
            break;
        case 2:
            return '离线放行'
            break;
    }
}
// 放行方式
export const releaseWay = status => {
    switch (status) {
        case 10:
            return '未开闸'
            break;
        case 11:
            return '自动开闸'
            break;
        case 12:
            return '人工/人工开闸'
            break;
        case 13:
            return '遥控器开闸'
            break;
    }
}
// 过车方向
export const vehicleOut = status => {
    switch (status) {
        case 0:
            return '进场'
            break;
        case 1:
            return '出场'
            break;
    }
}
