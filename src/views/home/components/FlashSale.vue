<template>
  <div class="flashWrapper">
    <div class="titleWrapper">
      <div class="title">限时抢购</div>
      <div class="roundTime">07:00场</div>
      <span class="roundState">已结束</span>
      <div class="more">更多</div>
    </div>
    <div class="itemsWrapper">
      <div
        class="wrappers"
        v-for="(item, index) in flashSaleList"
        :key="item.id"
      >
        <div class="wrapperImage">
          <van-image
            class="image"
            lazy-load
            :src="item.small_image"
            alt="item.spec"
          >
            <template v-slot:loading>
              <van-loading type="spinner" size="20" />
            </template>
          </van-image>
        </div>
        <div class="wrapperTitle">
          {{ item.name }}
        </div>
        <div class="priceAgo">{{ item.origin_price | moneyFormat }}</div>
        <div class="priceWrapper">
          <div class="priceNow">{{ item.price | moneyFormat }}</div>
          <div class="iconCartWrapper">
            <CartIcon :goods="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartIcon from "./../../cart/CartIcon.vue";
export default {
  name: "FlashSale",
  components: {
    CartIcon,
  },
  props: {
    flashSaleList: Array,
  },
};
</script>

<style scoped>
/* @import url(); 引入css类 */
.flashWrapper {
  width: 100%;
  height: 20em;
  background-color: white;
  margin-top: 0.625rem;
  padding: 1.25rem 0 0.9375rem 0;
}
.titleWrapper {
  /* position: relative; */
  margin: 0 0.625rem 0.625rem 0.625rem;
  height: 1.5625rem;
  /* width:100%; */
  /* 有margin，再设置宽度100%,就超出屏幕宽了，整个布局出大问题 */
  position: absolute;
}
.title {
  font-size: 1.1875rem;
  border-left: 4px #3cb963 solid;
  padding-left: 0.3125rem;
  display: inline-block;
  vertical-align: center;
}
.roundTime {
  display: inline-block;
  color: #fe3824;
  margin-left: 0.3125rem;
  vertical-align: center;
  margin-left: 0.3125rem;
}
.roundState {
  font-size: 0.875rem;
  color: #666;
  border: 1px solid #999;
  border-radius: 3px;
  vertical-align: center;
  padding: 0.15625rem;
  margin-left: 0.3125rem;
}
.more {
  font-size: 0.875rem;
  color: #2eb257;
  display: inline-block;
  vertical-align: center;
  position: relative;
  right: -5.5rem;
}
.itemsWrapper {
  margin-top: 4rem;
  /* width: 100%; */
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
  /* background-color: yellow; */
}
.itemsWrapper::-webkit-scrollbar {
  display: none;
}

.wrappers {
  width: 30%;
  margin: 0;
  margin-left: 0.6rem;
  /* background-color: turquoise; */
  display: inline-block;
}
.wrapperImage {
  padding: 0.4rem;
}
.image {
  width: 100%;
}
.wrapperTitle {
  height: 2.5rem;
  line-height: 1.25rem;
  padding: 0 0.4rem;
  font-size: 0.8125rem;
  margin-bottom: 0.3125rem;
  white-space: normal;
  overflow: hidden;
  word-break: break-all;
  /* 允许在单词内换行，更美观 */
  text-overflow: ellipsis;
  display: -webkit-box;
  /* 元素作为box伸缩盒子 */
  -webkit-line-clamp: 2;
  /* 设置文本行数限制 */
  -webkit-box-orient: vertical;
  /* 设置文本排列方式 */
}
.priceAgo {
  margin-bottom: 0.3125rem;
  font-size: 0.6875rem;
  color: #999999;
  text-decoration: line-through;
}
/* .priceWrapper {
  width: 100%;
} */
.priceNow {
  display: inline-block;
  font-size: 0.6875rem;
  color: #fe6263;
  vertical-align: middle;
}
.iconCartWrapper {
  display: inline-block;
  width: 1.875rem;
  vertical-align: middle;
  margin-left: 2rem;
}
</style>
