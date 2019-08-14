/* 合法uri*/
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 统一社会信用代码验证*/
export function validateCreditCode(str) {
  var reg = /^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g;
  return reg.test(str)
}

/* 手机号验证*/
export function validatePhone(str) {
  var reg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
  return reg.test(str)
}

/* 验证 密码 数字、大小写字母*/
export function validatePwd(str) {
  var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,12}$/
  return reg.test(str)
}

/* 6位 验证码*/
export function validateSixCode(str) {
  var reg = /^\d{6}$/
  return reg.test(str)
}

/* 时间 格式化*/
export function dateTime(time, type) {
  // var date = new Date(time.replace(/-/g, '/'));
  // let gettime = time.getTime()
  let dateIndex = new Date(time)
  let y = dateIndex.getFullYear() | '';
  let m = dateIndex.getMonth() + 1 | '';
  let d = dateIndex.getDate() | '';
  let h = dateIndex.getHours() | '';
  let mm = dateIndex.getMinutes() | '';
  let s = dateIndex.getSeconds() | '';
  let backData
  if (type == 'date') {
    backData = `${y}年${num(m)}月${num(d)}日 ${num(h)}:${num(mm)}:${num(s)}`;
  } else {
    backData = `${y}年${num(m)}月${num(d)}日`;
  }
  return backData;
}

function num(e) {
  return e<10? '0'+ e : e
}

/* 输入延迟 */
export function debounce(func, delay) {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

