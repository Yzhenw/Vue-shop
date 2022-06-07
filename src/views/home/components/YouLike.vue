<template>
  <div class="likeWrapper">
    <div class="likeTitle">
      <span class="line"></span>
      <span class="txt">猜你喜欢</span>
      <span class="line"></span>
    </div>
    <div class="likeItem">
      <div class="items" v-for="(like, index) in likeList" :key="like.id">
        <div class="itemsImage">
          <van-image
            class="image"
            lazy-load
            :src="like.small_image"
            :alt="like.name"
          >
            <template v-slot:loading>
              <van-loading type="spinner" size="20" />
            </template>
          </van-image>
        </div>
        <div class="itemsTitle">{{ like.name }}</div>
        <div class="itemsPrice">
          <div>
            <span class="priceNow">{{ like.origin_price | moneyFormat }}</span>
            <span class="priceAgo">{{ like.price | moneyFormat }}</span>
          </div>
          <CartIcon :goods="like" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//1.引入订阅消息
import PubSub from "pubsub-js";
//2.引入消息订阅信息名
import { HOMEADDTOCART } from "./../../../config/cart_msg";
import { addGoodsToCart } from "./../../../service/api/cartApi";
import CartIcon from "./../../cart/CartIcon.vue";
export default {
  name: "YouLike",
  props: {
    likeList: Array,
  },
  components: {
    CartIcon,
  },
  methods: {
    async addCart(goods) {
      PubSub.publish(HOMEADDTOCART, goods);
      await addGoodsToCart(goods);
      console.log(goods);
    },
  },
};
</script>

<style scoped>
.likeWrapper {
  /* width: 100%; */
  height: 2.1875rem;
  line-height: 2.1875rem;
  text-align: center;
  font-size: 1rem;
  background: #f5f5f5;
}
.likeWrapper .line {
  border-top: 1px solid #d8d8d8;
  width: 32%;
  display: inline-block;
  margin: 0 0.8rem;
  vertical-align: middle;
}
.likeTitle {
  margin: 1rem 0;
}
.likeWrapper .text {
  vertical-align: middle;
}
.likeItem {
  width: 100%;
}
.likeItem .items {
  width: 45%;
  background-color: white;
  margin-left: 0.7rem;
  margin-bottom: 1.5rem;
  float: left;
}
.itemsImage {
  padding: 0.4rem 0.9rem 0.2rem 0.9rem;
}
.image {
  width: 100%;
}
.itemsTitle {
  height: 2.5rem;
  line-height: 1.25rem;
  font-size: 0.875rem;
  width: 90%;

  overflow: hidden;
  word-break: break-all; /*允许在单词内换行，更美观*/
  text-overflow: ellipsis;
  display: -webkit-box; /*元素作为box伸缩盒子*/
  -webkit-line-clamp: 2; /*设置文本行数限制*/
  -webkit-box-orient: vertical; /*设置文本排列方式*/
  margin-bottom: 1.5rem;
}
.iconCartWrapper {
  display: inline-block;
  width: 1.875rem;
  vertical-align: middle;
  margin-left: 1rem;
}
.itemsPrice {
  height: 2.5rem;
  /* line-height: 2rem; */
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.priceNow {
  font-weight: bold;
  font-size: 0.75rem;
  color: #fe6263;
  vertical-align: middle;
}
.priceAgo {
  text-decoration: line-through;
  padding: 0 0.5rem;
  font-size: 0.6875rem;
  color: #b2b2b2;
  vertical-align: middle;
}
</style>
