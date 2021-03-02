/*
 * @Author: Wang Yuan
 * @Date: 2021-02-25 21:57:25
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-28 19:26:12
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
// 车牌类型
export const plateType = status => {
  switch (status) {
    case 0:
      return '标准民用车'
    case 1:
      return '02式民用车牌'
    case 2:
      return '武警车车牌'
    case 3:
      return '警车车牌'
    case 4:
      return '民用车双行尾牌'
    case 5:
      return '使馆车牌'
    case 6:
      return '农用车车牌'
    case 7:
      return '摩托车'
    case 8:
      return '新能源车'
    case 13:
      return '军车车牌'
  }
}
// 车牌颜色
export const plateColor = status => {
  switch (status) {
    case 0:
      return '蓝色'
    case 1:
      return '黄色'
    case 2:
      return '白色'
    case 3:
      return '黑色'
    case 4:
      return '绿色'
    case 5:
      return '民航黑色'
    case 255:
      return '其他颜色'
  }
}
// 车辆颜色
export const vehicleColor = status => {
  switch (status) {
    case 0:
      return '其他颜色'
    case 1:
      return '白色'
    case 2:
      return '银色'
    case 3:
      return '灰色'
    case 4:
      return '黑色'
    case 5:
      return '红色'
    case 6:
      return '深蓝色'
    case 7:
      return '蓝色'
    case 8:
      return '黄色'
    case 9:
      return '绿色'
    case 10:
      return '棕色'
    case 11:
      return '粉色'
    case 12:
      return '紫色'
    case 13:
      return '深灰'
    case 14:
      return '杏色'
    case 255:
      return '未识别的车辆颜色'
  }
}
// 监控点 传输协议
export const transType = status => {
  switch (status) {
    case 0:
      return 'UDP'
    case 1:
      return 'TCP'
  }
}
// 监控点 通道类型
export const channelType = status => {
  switch (status) {
    case 'analog':
      return '模拟通道'
    case 'digital':
      return '数字通道'
    case 'mirror':
      return '镜像通道'
    case 'record':
      return '录播通道'
    case 'zero':
      return '零通道'
  }
}
// 门禁点安装位置
export const installLocation = status => {
  switch (status) {
    case 'communityPerimeter':
      return '小区周界'
    case 'communityEntrance':
      return '小区出入口'
    case 'fireChannel':
      return '消防通道'
    case 'landscapePool':
      return '景观池'
    case 'outsideBuilding':
      return '住宅楼外'
    case 'parkEntrance':
      return '停车场（库）出入口'
    case 'equipmentRoom':
      return '设备房（机房、配电房、泵房）'
    case 'parkArea':
      return '停车场区'
    case 'monitorCenter':
      return '监控中心'
    case 'stopArea':
      return '禁停区'
    case 'vault':
      return '金库'
    case null:
      return '-'
  }
}
// 门禁点设备通道类型
export const accessChannelType = status => {
  switch (status) {
    case 'door':
      return '门禁通道'
    case 'reader':
      return '读卡器通道'
    case 'camera':
      return '监控点通道'
    case 'talk':
      return '对讲通道'
    case 'digital':
      return '子通道-数字通道'
    case 'analog':
      return '子通道-模拟通道'
  }
}
// 事件列表 进出类型
export const inAndOutType = status => {
  switch (status) {
    case 0:
      return '进'
    case 1:
      return '出'
    case -1:
      return '未知'
  }
}
