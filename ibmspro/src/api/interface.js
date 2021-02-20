/*
 * @Author: Wang Yuan 
 * @Date: 2021-02-20 17:53:39 
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-02-20 17:56:13
 */
import Axios from '../axiosRequest/axiosRequest'

// post
export const post = (url, params) => Axios.post(url,params)

// get
export const get = (url, params) => Axios.get(url,params)