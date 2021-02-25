/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-25 21:57:25 
 * @Last Modified by:   Wang Yuan 
 * @Last Modified time: 2021-02-25 21:57:25 
 */
export const depositeStatus = status => {
    switch (status) {
        case '0':
            return '未启用'
            break;
        case '1':
            return '正常'
            break;
        case '2':
            return '停缴'
            break;
        case '3':
            return '转移'
            break;
        case '9':
            return '取消'
            break;
    }
}