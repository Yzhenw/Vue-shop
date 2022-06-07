<template>
  <div id="dashboard">
    <van-tabbar v-model="active" active-color="#69C5DD">
      <van-tabbar-item icon="wap-home" replace to="/dashboard/home"
        >首页</van-tabbar-item
      >
      <van-tabbar-item icon="bag" replace to="/dashboard/category"
        >分类</van-tabbar-item
      >
      <van-tabbar-item
        icon="shopping-cart"
        :badge="goodsNum"
        replace
        to="/dashboard/cart"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="friends" replace to="/dashboard/mine"
        >我的</van-tabbar-item
      >
    </van-tabbar>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "Dashboard",
  data() {
    return {
      active: Number(sessionStorage.getItem("tabbarActiveIndex")) || 0, //通过active控制选中哪个板块
    };
  },
  watch: {
    active(value) {
      let tabbarActiveIndex = value > 0 ? value : 0;
      //缓存到本地
      sessionStorage.setItem("tabbarActiveIndex", tabbarActiveIndex);
    },
  },
  mounted() {
    //1.获取购物车数据
    this.INIT_SHOP_CART();
    //2.从服务器获取用户数据
    let res = this.reqUserInfo();
    //3.初始化用户数据
    this.INIT_USER_INFO();
  },
  computed: {
    ...mapState(["shopCart"]),
    goodsNum() {
      let num = Object.keys(this.shopCart).length;
      if (num) {
        return num;
      } else {
        return "";
      }
    },
  },
  methods: {
    ...mapMutations(["INIT_SHOP_CART", "INIT_USER_INFO"]),
    ...mapActions(["reqUserInfo"]),
  },
};
</script>

<style lang="less" scoped>
#dashboard {
  width: 100%;
  height: 100%;
  background-color: transparent;
}
</style>
