import axios from 'axios'
import {
  BASE_URL
} from '../config'
import store from '../store'

const addAuthorization = config => {
  // let {
  //   isLogin,
  //   token
  // } = store.state.login
  // if (isLogin) {
  config.headers.Authorization = localStorage.getItem('token')
  // }
}

const http = axios.create({
  baseURL: BASE_URL,
  timeout: 5 * 1000
})

http.interceptors.request.use(
  config => {
    addAuthorization(config)
    console.log('%c 发起请求 ======>', 'color: #4CAF50; font-weight: bold', config)
    return config
  },
  error => {
    console.log('%c 请求错误链接 =======>', 'color: #EC6060; font-weight: bold', error)
  }
)

http.interceptors.response.use(
  response => {
    console.log('%c 收到响应 ======>', 'color: #4CAF50; font-weight: bold', response)

    return validateCode(response) ? response.data : Promise.reject({
      ...response.data.meta
    })
  },
  error => {
    console.log('%c <======响应错误', 'color: #EC6060; font-weight: bold', error)
    alert('网络异常，请检查是否为无网络')
    return Promise.reject(error)
  }
)

function validateCode (res) {
  if (res.data && res.data.code !== 200) {
    return false
  }
  return true
}

export const fetch = (options) => {
  return http.request(options)
}
