// 本地化存储
export const setStore = (name, content) => {
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}
//本地化获取
export const getStore = (name) => {
  if (!name) return
  return window.localStorage.getItem(name)
}
//本地化删除
export const removeStore = (name) => {
  if (!name) return
  return window.localStorage.removeItem(name)
}

export const getCookie = (name) => {
  if (!name) return
  let arr = document.cookie.split(';')
  for (let val of arr) {
    if (val.split('=')[0] === name) {
      return val.split('=')[1]
    }
  }
}
export const delCookie = (name) => {
  if (!name) return
  let exp = new Date()
  exp.setTime(exp.getTime() - 1)
  document.cookie =
    name +
    '=' +
    ';' +
    'path=/;domain=' +
    document.domain +
    ';expires=' +
    exp.toGMTString()
}
