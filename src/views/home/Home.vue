<template>
  <div id="home">
    <div v-if="!showLoading">
      <Header />
      <Sowing :sowingList="sowingList" />
      <Nav :navList="navList" />
      <FlashSale :flashSaleList="flashSaleList" />
      <YouLike :likeList="likeList" />
      <MarkPage :scrollToTop="scrollToTop" v-if="showBackStatus" />
    </div>
    <van-loading
      v-else
      type="spinner"
      color="#c9c9c9"
      text-color="#c9c9c9"
      style="position: absolute; left: 30%; top: 40%"
    >
      小磊正在努力加载中</van-loading
    >
  </div>
</template>

<script>
import Header from "./components/Header";
import Sowing from "./components/Sowing";
import Nav from "./components/Nav";
import FlashSale from "./components/FlashSale";
import YouLike from "./components/YouLike";
import MarkPage from "./components/MarkPage";
import { getHomeData } from "./../../service/api/index";

export default {
  name: "Home",
  components: {
    Header,
    Sowing,
    Nav,
    FlashSale,
    YouLike,
    MarkPage,
  },
  data() {
    return {
      //首页的轮播图数据
      sowingList: [],
      showLoading: true,
      navList: [],
      flashSaleList: [],
      likeList: [],
      showBackStatus: false, //返回顶部导航属性
    };
  },
  methods: {
    //返回顶部浮层
  },
  async created() {
    //2.拿到网络数据
    let response = await getHomeData();
    if (response.data.success) {
      let res_data = response.data.data;
      this.sowingList = res_data.list[0].icon_list;
      this.navList = res_data.list[2].icon_list;
      this.flashSaleList = res_data.list[3].product_list;
      this.likeList = res_data.list[12].product_list;
      this.showLoading = false;
    } else {
      console.log(response);
    }
  },
};
</script>

<style lang="less" scoped>
#home {
  width: 100%;
  height: 505rem;
  background-color: transparent;
}
</style>
