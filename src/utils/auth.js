import cookies from 'js-cookie'

const TokenKey = 'JSESSIONID'

export function getToken() {
  return cookies.get(TokenKey)
}

export function setToken(token) {
  return cookies.set(TokenKey, token, { expires: 1 / 100, path: '' })
}

export function removeToken() {
  return cookies.remove(TokenKey)
}
