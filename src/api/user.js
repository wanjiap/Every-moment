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
// 设置用户信息
export function uses(arg) {
  return service({
    url: api.User,
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
//课程详情
export function basis(params) {
  return service({
    url: api.Basis+params,
    method: 'get',
    params:params
  })
}
//老师详情
export function teache(params) {
  return service({
    url: api.Teacher+params,
    method: 'get',
    params:params
  })
}
//老师课程
export function teacherlist(arg) {
  return service({
    url: api.Teachetlist,
    method: 'post',
    params:arg
  })
}
//老师课程详情
/* export function distr(params) {
  return service({
    url: api.Distr+params,
    method: 'get',
    params:params
  })
} */
// 设置密码
export function passwor(arg) {
  return service({
    url: api.Password,
    method: 'post',
    data:arg
  })
}
//好课推荐
export function hao(params) {
  return service({
    url: api.Hao,
    method: 'get',
    params:params
  })
}
//判断是否签到
export function wei(params) {
  return service({
    url: api.Wei,
    method: 'get',
    params:params
  })
}
//判断是否签到
export function sig(arg) {
  return service({
    url: api.Sig,
    method: 'post',
    params:arg
  })
}
//我的积分
export function mins(params) {
  return service({
    url: api.Mine,
    method: 'get',
    params:params
  })
}
//日期
export function ri(params) {
  return service({
    url: api.Ri,
    method: 'get',
    params:params
  })
}
//日期
export function ke(params) {
  return service({
    url: api.Ke,
    method: 'get',
    params:params
  })
}
/* 咨询分类 */
export function zifen(params) {
  return service({
    url: api.Zifen,
    method: 'get',
    params:params
  })
}
/* 咨询列表 */
export function zilist(params) {
  return service({
    url: api.Zilist,
    method: 'post',
    params:params
  })
}
/* 咨询详情 */
export function zidetil(params) {
  return service({
    url: api.Zidetail,
    method: 'post',
    params:params
  })
}
/* 课程大纲 */
export function keda(params) {
  return service({
    url: api.Keda,
    method: 'post',
    params:params
  })
}

