// src/mock/list.js

import Mock from 'mockjs'

const Random = Mock.Random

export const getList = () => {

  return beseResponse(Mock.mock({
    'list|1-10': [{
      'id|+1': 1,
      'name': '@cname',
      'email': '@email',
      'phone': /^1(3|4|5|7|8)\d{9}$/,
      'date': Random.now('yyyy-MM-dd'),
      'image|+1': [
        Random.image('200x100', '#09c', '#FFF', 'AAA'),
        Random.image('200x100', '#c90', '#FFF', 'BBB'),
        Random.image('200x100', '#90c', '#FFF', 'CCC'),
        Random.image('200x100', '#50B347', '#FFF', 'DDD')
      ],
      'web': '@url',
      'address': '@county(true)'
    }]
  }))
}

function beseResponse(val) {
  return {
    code: 200,
    success: true,
    message: '成功',
    data: val
  }
}

