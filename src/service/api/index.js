import axios from "axios";
const axiosHome = axios.create({ baseURL: "http://demo.itlike.com/web/xlmc" });
const ajax = (url = "", type, params = {}) => {
  let askType = type.toLowerCase();
  return axiosHome[askType](url, params);
};
//商品分类接口
export const getCategories = () => ajax("/api/homeApi/categories", "get");
export const getCategoriesDetail = (params) =>
  ajax("/api/homeApi/categoriesdetail" + params, "get");
export const getHomeData = () => ajax("/api/homeApi", "get"); //getHomeData一定是一个promise对象

//用户中心接口
//1.获取手机验证码
//http://demo.itlike.com/web/xlmc/api/send_code
export const getPhoneCode = (phone) => ajax("/api/send_code", "get", { phone });
//2.手机验证码登录
// http://demo.itlike.com/web/xlmc/api/login_code
export const phoneCodeLogin = ({ phone, code }) =>
  ajax("/api/login_code", "post", { phone, code });
//3.用户名密码登录
// http://demo.itlike.com/web/xlmc/api/login_pwd
export const userPwdLogin = ({ user_name, user_pwd, captcha }) =>
  ajax("/api/login_pwd", "post", {
    user_name,
    user_pwd,
    captcha,
  });
//4.自动登录
// http://demo.itlike.com/web/xlmc/api/userinfo
export const autoLogin = () => ajax("/api/userinfo", "get");
//5.退出登录
// http://demo.itlike.com/web/xlmc/api/logout
export const userLogOut = () => ajax("/api/logout", "get");
