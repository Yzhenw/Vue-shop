<template>
  <div id="order">
    <van-nav-bar
      title="填写订单"
      left-text="返回"
      right-text="登录"
      left-arrow
      border
      :fixed="true"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-contact-card
      :type="address_type"
      :name="address_name"
      add-text="选择收货地址"
      :tel="currentContact.tel"
      @click="onAdd"
      style="margin-top: 3rem"
    />
    <!-- 物流信息 -->
    <div style="margin-top: 0.5rem">
      <van-cell-group>
        <van-cell
          title="送达时间"
          is-link
          @click="showPopup"
          :value="dateValue"
        />
        <van-popup v-model="show" position="bottom">
          <van-datetime-picker
            v-model="currentDate"
            type="date"
            title="选择年月日"
            :min-date="minDate"
            :max-date="maxDate"
            @confirm="confirm"
            @cancel="cancelTime()"
          />
        </van-popup>

        <van-cell center is-link :value="`共${checkedLength}件`">
          <van-row slot="title" type="flex">
            <van-image
              v-for="img in showImages"
              :key="img.id"
              :src="img.src"
              width="60"
              height="60"
            />
          </van-row>
        </van-cell>
      </van-cell-group>
    </div>
    <div style="margin-top: 0.5rem">
      <van-cell title="支付方式" value="微信" />
    </div>
    <div style="margin-top: 0.5rem">
      <van-cell title="备注">
        <input v-model="value" placeholder="选填，备注你的特殊要求" />
      </van-cell>
    </div>
    <div style="margin-top: 0.5rem">
      <van-cell title="商品金额" :value="`￥${totalPrice}`" />
      <van-cell title="配送费" value="包邮" />
    </div>
    <van-submit-bar
      :price="totalPrice * 100"
      label="实付："
      button-text="提交订单"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
import { mapState, mapGetters, mapMutations } from "vuex";
// import PubSub from "pubsub-js";
export default {
  name: "Order",
  data() {
    return {
      value: "",
      dateValue: "请选择送达时间",
      address_type: "add",
      address_name: "默认名字",
      address_tel: "",
      show: false,
      currentContact: {
        name: "张三",
        tel: "13000000000",
      },
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(2022, 0, 24),
    };
  },
  computed: {
    ...mapState(["shopCart"]),
    ...mapGetters(["checkedShopCart", "checkedLength", "totalPrice"]),
    showImages() {
      let i = 0;
      let images = [];
      for (let key in this.checkedShopCart) {
        images.push({
          id: this.checkedShopCart[key].id,
          src: this.checkedShopCart[key].small_image,
        });
        if (++i == 2) break;
      }
      return images;
    },
  },
  methods: {
    ...mapMutations(["INIT_SHOP_CART", "INIT_USER_INFO"]),
    showPopup() {
      this.show = true;
    },
    onClickLeft() {
      this.$router.push("/dashboard/cart");
    },
    onClickRight() {
      Toast("登录");
    },
    onAdd() {
      this.$router.push({ path: "/selectaddress" });
    },
    onSubmit() {
      Toast("提交");
    },
    confirm(value) {
      let date = `${value.getFullYear()}年${
        value.getMonth() + 1
      }月${value.getDate()}日前`;
      // console.log(date);
      this.dateValue = date;
      this.show = false;
    },
    cancelTime() {
      this.show = false;
    },
  },
  mounted() {
    //1.获取购物车数据
    this.INIT_SHOP_CART();
    //3.初始化用户数据
    this.INIT_USER_INFO();
    if (this.$route.params.item) {
      this.address_type = "edit";
      this.address_name = this.$route.params.item.name;
      this.address_tel = this.$route.params.item.tel;
      // console.log(this.address_name);
    }
  },
};
</script>

<style scoped>
/* @import url(); 引入css类 */
#order {
  height: 100vh;
  background: transparent;
}
</style>
