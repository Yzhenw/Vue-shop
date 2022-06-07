<template>
  <swiper ref="mySwiper" id="swiper" :options="swiperOptions">
    <swiper-slide v-for="icon in sowingList" :key="icon.public_id">
      <img :src="icon.icon_url" :alt="icon.public_name" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
//页面引入swiper
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide,
  },
  props: {
    sowingList: Array,
  },
  data() {
    return {
      swiperOptions: {
        notNextTick: true, //不用等待数据加载完成才能显示，一进来就能显示
        pagination: {
          el: ".swiper-pagination", //设置分页器为圆点
          clickable: true,
        },
        //循环
        loop: true,
        //自动切换
        speed: 1500,
        autoplay: true,
        autoplay: {
          delay: 2000, //1秒切换一次
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    this.swiper.slideTo(1, 1000, false);
  },
};
</script>

<style scoped>
/* @import url(); 引入css类 */
#swiper {
  /* width: 100%; */
  height: 12rem;
}
#swiper img {
  width: 100%;
  height: 100%;
}
/* 穿透修改样式 */
#swiper >>> .swiper-pagination-bullet-active {
  background: #72b4eb;
  opacity: 1;
}
</style>
