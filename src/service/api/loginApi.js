import axios from 'axios'
const axiosLogin = axios.create({
  baseURL: 'http://localhost:3000/api/login',
  withCredentials: true,
})
//获取手机验证码
export const getPhoneCode = (phone) => {
  return axiosLogin.get('/send_code', { params: { phone: phone } })
}
//手机验证码登录
export const getPhoneLogin = (params) => {
  return axiosLogin.post('/login_code', params)
}
//用户名密码登录
export const getPwdLogin = (params) => {
  return axiosLogin.post('/login_pwd', params)
}
export const userLogout = () => {
  return axiosLogin.get('/logout')
}
