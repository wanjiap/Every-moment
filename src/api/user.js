import api from './index'
// axios
import service from '@/utils/request'

// 登录
export function loging(arg) {
  return service({
    url: api.Login,
    method: 'post',
    data:arg
  })
}

// 获取验证码
export function phone(arg) {
  return service({
    url: api.Phone,
    method: 'post',
    data:arg
  })
}

// 获取用户信息
export function userinfo(params) {
  return service({
    url: api.UserInfo,
    method: 'get',
    params:params
  })
}

// 获取banner图
export function banner(params) {
  return service({
    url: api.Banner,
    method: 'get',
    params:params
  })
}

// 获取nav
export function nav(params) {
  return service({
    url: api.Nav,
    method: 'get',
    params:params
  })
}
// 获取首页数据
export function pagelist(params) {
  return service({
    url: api.PageList,
    method: 'get',
    params:params
  })
}
