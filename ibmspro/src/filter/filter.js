/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-25 21:57:25 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-26 21:24:16
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
             
        case 1:
            return '小型车'
             
        case 2:
            return '大型车'
             
        case 3:
            return '摩托车'
             
    }
}
// 放行结果
export const releaseResult = status => {
    switch (status) {
        case 0:
            return '未放行'
             
        case 1:
            return '正常放行'
             
        case 2:
            return '离线放行'
             
    }
}
// 放行方式
export const releaseWay = status => {
    switch (status) {
        case 10:
            return '未开闸'
             
        case 11:
            return '自动开闸'
             
        case 12:
            return '人工/人工开闸'
             
        case 13:
            return '遥控器开闸'
             
    }
}
// 过车方向
export const vehicleOut = status => {
    switch (status) {
        case 0:
            return '进场'
             
        case 1:
            return '出场'
             
    }
}
// 交易方式
export const tradeWay = status => {
    switch (status) {
        case 1:
            return '现金'
             
        case 4:
            return '支付宝'
             
        case 5:
            return '微信'
             
    }
}
// 交易类型
export const tradeType = status => {
    switch (status) {
        case 0:
            return '充值'
             
        case 1:
            return '退款'
             
    }
}
// 性别
export const gender = status => {
    switch (status) {
        case 1:
            return '男'
        case 2:
            return '女'
    }
}
// 访客管理 > 1-3为：访客预约--访客状态，5-8为：来访距记录 -- 访客状态
export const visitorStatus = status => {
    switch (status) {
        case 1:
            return '正常'
        case 2:
            return '迟到'
        case 3:
            return '失效'
        case 5:
            return '超期自动签离'
        case 6:
            return '已签离'
        case 7:
            return '超期未签离'
        case 8:
            return '已到达'
    }
}
// 访客权限下载记录 -- 授权类型
export const 人脸 = status => {
    switch (status) {
        case 0:
            return '身份证'
        case 1:
            return '身份证序列号'
        case 2:
            return 'IC卡号'
        case 3:
            return '身份证'
        case 4:
            return '车牌号'
        case 5:
            return '人脸'
    }
}
// 访客权限下载记录 -- 设备类型
export const deviceType = status => {
    switch (status) {
        case 1:
            return '门禁'
        case 2:
            return '梯控'
        case 3:
            return '可视对讲'
        case 4:
            return '停车场'
        case 5:
            return '人脸监控'
    }
}