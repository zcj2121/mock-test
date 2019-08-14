// import Qs from 'qs';
import axios from 'axios'

// 创建axios实例
const service = axios.create({
  withCredentials: true,
  baseURL: '', // api 的 base_url
  timeout: 100000, // 请求超时时间
  method: 'post',
  cache: false
})

service.interceptors.request.use(config => {
  return config
},() => {})

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    console.log(response.data);
    return res
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
// respone拦截器
