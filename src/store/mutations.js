import { getState } from 'core-js/modules/web.url-search-params'
import { setStore, getStore, removeStore } from '../config/global'
import {
  ADD_GOODS,
  INIT_SHOP_CART,
  ADD_GOODs_NUM,
  DEL_GOODs_NUM,
  CLEAR_CART,
  DEL_GOOD,
  SELECT_SINGLE_GOOD,
  SELECT_ALL_GOODS,
  USER_INFO,
  INIT_USER_INFO,
  CLEAR_USER,
  INIT_ADDRESS,
  ADDRESS,
} from './mutations-type'

export default {
  //1.往购物车中添加数据
  [ADD_GOODS](state, { goodsId, goodsName, smallImage, goodsPrice }) {
    let shopCart = state.shopCart
    // 1.1 判断商品是否存在
    if (shopCart[goodsId]) {
      //存在
      shopCart[goodsId]['num']++
    } else {
      //不存在
      shopCart[goodsId] = {
        goods_num: 1,
        goods_id: goodsId,
        goods_name: goodsName,
        small_image: smallImage,
        goods_price: goodsPrice,
        goods_checked: false,
      }
    }
    //1.2 产生新对象
    state.shopCart = JSON.parse(JSON.stringify(shopCart))
    //1.3 存入本地
    // setStore("shopCart", state.shopCart);
  },
  //页面初始化 获取购物车数据(本地)
  [INIT_SHOP_CART](state, initCart) {
    if (initCart) {
      state.shopCart = { ...initCart } //如果来源于网络就要用actions了
    }
  },

  //增加商品数量
  [ADD_GOODs_NUM](state, goodsId) {
    state.shopCart[goodsId]['num']++
    // 存入本地
    setStore('shopCart', state.shopCart)
  },

  //减少商品数量
  [DEL_GOODs_NUM](state, goodsId) {
    state.shopCart[goodsId]['num']--
    // 存入本地
    setStore('shopCart', state.shopCart)
  },
  [CLEAR_CART](state) {
    state.shopCart = {}
    removeStore('shopCart')
  },
  [DEL_GOOD](state, goodsId) {
    let shopCart = state.shopCart
    delete shopCart[goodsId]
    state.shopCart = JSON.parse(JSON.stringify(shopCart))
    setStore('shopCart', state.shopCart)
  },
  //单选商品
  [SELECT_SINGLE_GOOD](state, goodsId) {
    state.shopCart[goodsId].checked = !state.shopCart[goodsId].checked
    setStore('shopCart', state.shopCart)
  },
  //全选商品
  [SELECT_ALL_GOODS](state, flag) {
    let shopCart = state.shopCart
    if (Object.keys(shopCart).length > 0) {
      Object.values(shopCart).forEach((goods, index) => {
        goods.checked = flag
      })
      state.shopCart = JSON.parse(JSON.stringify(shopCart))
      setStore('shopCart', state.shopCart)
    }
  },
  //存储用户信息到本地
  [USER_INFO](state, { userInfo }) {
    state.userInfo = userInfo
    setStore('userInfo', state.userInfo)
  },
  //8.获取用户信息
  [INIT_USER_INFO](state) {
    let userInfo = getStore('userInfo')
    if (userInfo) {
      state.userInfo = JSON.parse(userInfo)
    }
  },
  //9.退出登录 清除用户信息
  [CLEAR_USER](state) {
    state.userInfo = {}
  },
  //10.初始化地址列表
  [INIT_ADDRESS](state) {
    let add_list = getStore('address_list')
    if (add_list) {
      state.address_list = JSON.parse(add_list)
    }
  },
  //11.更改列表信息
  [ADDRESS](state, add) {
    if (add) {
      let id = state.address_list.length
      add.id = id + 1
      state.address_list.push(add)
      setStore('address_list', state.address_list)
    }
  },
}
