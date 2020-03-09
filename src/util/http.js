import axios from 'axios'
// import {Message} from 'view-design'

let isPrompt = false
const Axios = axios.create({
  baseURL: 'http://127.0.0.1:17000',
  timeout: 10 * 1000,
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  responseType: 'json',
  withCredentials: false
})

Axios.interceptors.request.use(config => {
  console.log(config.url)
  return config
}, err => {
  return Promise.reject(err)
})
Axios.interceptors.response.use(response => {
  return response
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '错误请求'
        break
      case 401:
        err.message = '未授权'
        isPrompt = true
        break
      case 403:
        err.message = '权限不足'
        break
      case 404:
        err.message = '请求错误，未找到该资源'
        break
      case 405:
        err.message = '请求方法未允许'
        break
      case 408:
        err.message = '请求超时'
        break
      case 500:
        err.message = '服务器端出错'
        break
      case 501:
        err.message = '网络未实现'
        break
      case 502:
        err.message = '网络出错'
        break
      case 503:
        err.message = '服务不可用'
        break
      case 504:
        err.message = '网络超时'
        break
      case 505:
        err.message = 'http版本不支持该请求'
        break
      default:
        err.message = '链接错误'
    }
  } else {
    err.message = '网络出现问题，请稍后重试'
  }
  if (!isPrompt) {
    isPrompt = true
    // Message.error(err.message)
  }
  setTimeout(() => {
    isPrompt = false
  }, 500)
  return Promise.reject(err.response)
})
export default Axios
