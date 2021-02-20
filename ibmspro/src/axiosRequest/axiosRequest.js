/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-20 17:31:15 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-20 17:31:49
 */
import axios from 'axios'

const Axios = axios.create({
    baseURL: '/personalManage',
    responseType: 'json',
    timeout: 10000,
    headers: {
        "Content-Type":"application/json; charset=utf-8"
    }
})

// 在发送请求之前做些什么
Axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
})

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
})

export default Axios