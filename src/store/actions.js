import { USER_INFO, ADD_GOODS, INIT_SHOP_CART } from './mutations-type'
import { autoLogin } from './../service/api/index'
import { initGoodsToCart } from './../service/api/cartApi'
import { getStore } from '../config/global'
export default {
  //1.同步用户信息
  syncUserInfo({ commit }, userInfo) {
    commit(USER_INFO, { userInfo })
  },
  //2.从服务端获取用户信息 自动登录
  async reqUserInfo({ commit }) {
    let res = await autoLogin()
  },

  //3.购物车初始化数据
  async initCart({ commit }) {
    let { data } = await initGoodsToCart(getStore('account'))
    commit(INIT_SHOP_CART, data)
  },
}
