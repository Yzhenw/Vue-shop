<template>
  <div id="cart">
    <!-- 头部通栏 -->
    <header class="titleWrapper">
      <strong>购物车</strong>
      <button class="clear_cart" @click="clearCart()">清空购物车</button>
    </header>
    <!-- 主要内容 -->
    <div class="contentWrapper">
      <div
        class="contentWrapper-list"
        v-for="(val, goods_id) in shopCart"
        :key="goods_id"
      >
        <div class="content-radio" @click="selectSinGood(goods_id)">
          <van-checkbox
            v-model="val.goods_checked"
            checked-color="rgb(117,163,66)"
            icon-size="18px"
          ></van-checkbox>
        </div>

        <div class="left-pic">
          <img :src="val.small_image" width="110px" />
        </div>
        <div class="right">
          <div class="goodsIntro">
            {{ val.goods_name }}
          </div>
          <div class="goodsPrice">
            <div class="sinPrice">
              {{ (val.goods_price * val.goods_num) | moneyFormat }}
            </div>
            <div class="goodsAccounts">
              <span class="numRem" @click="delNum(goods_id, val.goods_num)">
                -
              </span>
              <span class="num">{{ val.goods_num }}</span>
              <span class="numAdd" @click="addNum(id)">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部通栏 -->
    <footer class="tabBar">
      <div class="selectedAll">
        <div class="select_icon" @click="selectAllGood()">
          <van-checkbox
            v-model="selectAllFlag"
            checked-color="rgb(117,163,66)"
            icon-size="18px"
          ></van-checkbox>
          <span>全选</span>
        </div>
        <div class="tolPrice">
          <span>合计：</span>
          <span style="color: red;">{{ checkedAccounts | moneyFormat }}</span>
        </div>
      </div>
      <div class="submit">
        <router-link tag="a" to="/order" style="color: white;">
          去结算({{ checkedNum }})
        </router-link>
      </div>
    </footer>
  </div>
</template>

<script>
import { Dialog } from 'vant'
import { mapMutations, mapState, mapActions } from 'vuex'
export default {
  name: 'Cart',
  data() {
    return { flagAll: false }
  },
  methods: {
    ...mapMutations([
      'INIT_SHOP_CART',
      'ADD_GOODs_NUM',
      'DEL_GOODs_NUM',
      'CLEAR_CART',
      'DEL_GOOD',
      'SELECT_SINGLE_GOOD',
      'SELECT_ALL_GOODS',
    ]),
    ...mapActions(['initCart']),
    //清空购物车
    clearCart() {
      Dialog.confirm({
        title: '小磊提示',
        message: '你确定要清空购物车吗',
      })
        .then(() => {
          this.CLEAR_CART()
        })
        .catch(() => {
          // on cancel
        })
    },
    //减少商品数量
    delNum(id, num) {
      if (num > 1) {
        this.DEL_GOODs_NUM(id)
      } else {
        Dialog.confirm({
          title: '小磊提示',
          message: '确定要删除此商品吗',
        })
          .then(() => {
            this.DEL_GOOD(id)
          })
          .catch(() => {
            // on cancel
          })
      }
    },
    //增加商品数量
    addNum(id) {
      this.ADD_GOODs_NUM(id)
    },
    //单选商品
    selectSinGood(id) {
      this.SELECT_SINGLE_GOOD(id)
    },
    //全选商品
    selectAllGood() {
      this.flagAll = !this.flagAll
      //单件商品checked = 全选checked
      this.SELECT_ALL_GOODS(this.flagAll)
    },
  },
  computed: {
    ...mapState(['shopCart']),
    //是否全选
    selectAllFlag: {
      get() {
        if (Object.keys(this.shopCart).length > 0) {
          let flag = Object.values(this.shopCart).every((goods, index) => {
            return goods.goods_checked
          })
          this.flagAll = flag
          return this.flagAll
        } else {
          return false
        }
      },
      set(value) {
        this.flagAll = value
      },
    },
    //选中数量
    checkedNum() {
      let Num = 0
      Object.values(this.shopCart).forEach((goods, index) => {
        if (goods.goods_checked) {
          Num += 1
        }
      })
      return Num
    },
    //选中总价格
    checkedAccounts() {
      let Account = 0
      Object.values(this.shopCart).forEach((goods, index) => {
        if (goods.goods_checked) {
          Account += goods.goods_num * goods.goods_price
        }
      })
      return Account
    },
  },
  mounted() {
    this.initCart()
  },
}
</script>

<style lang="less" scoped>
#cart {
  display: flex;
  flex-direction: column;
}
// 头部通栏
.titleWrapper {
  background: #fff;
  height: 2.6rem;
  line-height: 2.6rem;
  padding-left: 4rem;
  width: 100vw;
  text-align: center;
  color: rgb(26, 24, 24);
  flex: none;
}
.clear_cart {
  font-size: 14px;
  float: right;
  padding-right: 0.5rem;
}
// 内容
.contentWrapper {
  // background-color: darksalmon;
  flex: auto;
  height: 29.8rem;
  overflow: scroll;
}
.contentWrapper-list {
  display: flex;
  margin: 0.7rem 0.2rem;
  border-radius: 5px;
  padding: 0.7rem 0;
  background-color: #fff;
}
.content-radio {
  margin: auto 0.5rem;
}
.right {
  padding-left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: auto;
}
.goodsIntro {
  font-size: 0.9rem;
  padding: 0 0.1rem;
  overflow: hidden;
  display: -webkit-box; //将对象作为弹性伸缩盒子模型展示
  -webkit-box-orient: vertical; //设置伸缩盒子子对象的排列方式
  -webkit-line-clamp: 2; //用来限制在一个块元素显示文本的行数
}
.goodsPrice {
  display: flex;
  justify-content: space-around;
}
.goodsAccounts {
  display: flex;
  width: 4rem;
  background-color: greenyellow;
}
.numAdd {
  background-color: rgb(248, 246, 246);
  text-align: center;
  flex: 1;
}
.num {
  background-color: rgb(219, 215, 215);
  text-align: center;
  flex: 3;
}
.numRem {
  background-color: rgb(248, 246, 246);
  text-align: center;
  flex: 1;
}
// 底部通栏
.tabBar {
  flex: none;
  background-color: #fff;
  height: 2.5rem;
  margin-bottom: 3rem;
  // position: fixed;
  // bottom: 3rem;
  // right: 0;
  // left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.selectedAll {
  display: flex;
  justify-content: space-around;
}
.select_icon {
  display: flex;
  padding: 0 1rem;
}
.submit {
  background-color: rgba(255, 0, 0, 0.774);
  border-radius: 2rem;
  height: 2rem;
  width: 5rem;
  line-height: 2rem;
  text-align: center;
  margin-right: 0.5rem;
}
</style>
