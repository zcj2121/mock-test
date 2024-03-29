
export function parseTime(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
    }
  }
  return fmt
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}

export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
    decodeURIComponent(search)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"') +
    '"}'
  )
}

export function MillisecondToDate(val) {
  let hour
  let minute
  let second
  var thisVal = val
  if (thisVal > 60) {
    if (thisVal > 3600) {
      hour = parseInt(thisVal / 3600)
      const defminute = parseInt((thisVal % 3600))
      if (defminute > 60) {
        minute = parseInt(defminute / 60)
      } else {
        minute = 0
      }
      second = parseInt((defminute % 60))
    } else {
      hour = 0
      minute = parseInt(thisVal / 60)
      second = parseInt((thisVal % 60))
    }
  } else {
    hour = 0
    minute = 0
    second = thisVal
  }
  return hour + '时' + (minute < 10 ? '0' + minute : minute) + '分' + (second < 10 ? '0' + second : second) + '秒'
}


export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function() {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function(...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}


export function beseResponse(val) {
  return {
    code: 200,
    success: true,
    message: '成功',
    data: val
  }
}
