<template>
  <div id="goodsItems">
    <p class="title">{{ title }}</p>
    <van-card
      v-for="val in products"
      :price="val.price"
      :origin-price="val.origin_price"
      :desc="val.spec"
      :title="val.product_name"
      :thumb="val.small_image"
      :key="val.id"
    >
      <template #num>
        <CartIcon :goods="val" />
      </template>
    </van-card>
  </div>
</template>

<script>
import CartIcon from "./../../cart/CartIcon.vue";
export default {
  name: "goodsItems",
  props: {
    title: {
      type: String,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
  },
  components: {
    CartIcon,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
/* @import url(); 引入css类 */
.title {
  color: grey;
  font-size: 12px;
  padding-left: 10px;
}
</style>
