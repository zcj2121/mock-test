import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

// 获取用户信息
export function getUserInfo(params) {
  return request({
    url: '/user/get_info',
    method: 'get',
    params
  })
}

// 获取用户 列表
export function getUserList() {
  return request({
    url: '/user/get_user_list',
    method: 'get'
  })
}

// 退出
export function logout() {
  return request({
    url: '/user/logout',
    method: 'get'
  })
}

// 获取权限
export function getRoles() {
  return request({
    url: '/user/getRoles',
    method: 'get'
  })
}

// 注册
export function register(data) {
  return request({
    url: '/user/register',
    method: 'post',
    data
  })
}

// 修改密码
export function editPassword(data) {
  return request({
    url: '/user/editPassword',
    method: 'post',
    data
  })
}

