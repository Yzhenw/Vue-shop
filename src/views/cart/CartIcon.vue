<template>
  <div id="cartIcon">
    <van-icon
      name="cart-o"
      color="rgb(55, 187, 62)"
      size="20"
      @click="addToCart(goods)"
    />
  </div>
</template>

<script>
import { Toast } from 'vant'
import { getCookie, getStore } from './../../config/global'
import { addGoodsToCart } from './../../service/api/cartApi'
import { mapMutations } from 'vuex'
export default {
  name: 'CartIcon',
  props: {
    goods: Object,
  },
  data() {
    return {}
  },
  methods: {
    ...mapMutations(['ADD_GOODS']),
    async addToCart(goods) {
      if (getCookie('token')) {
        let account = getStore('account')
        await addGoodsToCart({ ...goods, account })
        this.ADD_GOODS({
          goodsId: goods.id,
          goodsName: goods.name,
          smallImage: goods.small_image,
          goodsPrice: goods.price,
        })
        Toast({
          message: '添加购物车成功',
          duration: 800,
        })
      } else {
        //用户信息不存在
        this.$router.push('/login')
      }
    },
  },
  computed: {},
}
</script>

<style scoped>
/* @import url(); 引入css类 */
</style>
