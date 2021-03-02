/*
 * @Author: Wang Yuan
 * @Date: 2021-03-01 18:17:15
 * @Last Modified by: Wang Yuan
 * @Last Modified time: 2021-03-02 11:35:07
 */
import httpRequest from './../utils/httpRequest'

// post
export const post = (url, params) => httpRequest.post(httpRequest.adornUrl(url), httpRequest.adornData(params))

// get
export const get = (url, params) => httpRequest.get(httpRequest.adornUrl(url), httpRequest.adornParams(params))
