/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-25 21:12:01 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-25 22:27:14
 */
export default {
    // UTC时间转为ISO8601
    UTCToISO8601 (utc) {
        // UTC: Wed Feb 17 2021 00:00:00 GMT+0800
        // ISO8601: 2018-07-26T15:00:00+08:00
        let year = utc.getFullYear() // 2021
        let month = utc.getMonth() + 1 // 2
        month = month < 10 ? '0' + month : month
        let day = utc.getUTCDate() < 10 ? '0' + utc.getUTCDate() : utc.getUTCDate() // 21  // 17
        let h = utc.getHours()  < 10 ? '0' + utc.getHours() : utc.getHours() // 21
        let m = utc.getMinutes() < 10 ? '0' + utc.getMinutes() : utc.getMinutes() // 20
        let s = utc.getSeconds() < 10 ? '0' + utc.getSeconds() : utc.getSeconds() // 01
        return year + '-' + month + '-' + day + 'T' + h + ':' + m + ':' + s + '+08:00' 
    }
}