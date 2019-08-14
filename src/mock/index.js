
// src/mock/index.js

import Mock from 'mockjs'
import { getList } from './list'

// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({
  timeout: 1000
})



// 获取列表信息
Mock.mock('/api/list', getList)

// 配置多个 统一管理
// Mock.mock('/api/list1', getList1)
// Mock.mock('/api/list2', getList2)
// ......

export default Mock


