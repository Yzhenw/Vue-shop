<template>
  <div id="select_address">
    <van-nav-bar
      title="我的地址"
      left-text="返回"
      left-arrow
      :fixed="true"
      @click-left="onClickLeft"
    />
    <div style="margin-top: 3rem">
      <van-address-list
        v-model="chosenAddressId"
        :list="address_list"
        default-tag-text="默认"
        :disabled-list="disabledList"
        disabled-text="以下地址超出配送范围"
        @add="onAdd"
        @edit="onEdit"
        @select="onSelect"
      />
    </div>
  </div>
</template>

<script>
import PubSub from "pubsub-js";
import { Toast } from "vant";
import { mapState, mapMutations } from "vuex";
export default {
  name: "SelectAddress",
  data() {
    return {
      chosenAddressId: "1",
      list: [],
      Address: {},
      disabledList: [
        {
          id: "4",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号",
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["INIT_ADDRESS"]),
    onClickLeft() {
      this.$router.back();
    },
    onAdd() {
      this.$router.push({ path: "/addAddress" });
    },
    onEdit(item, index) {
      this.$router.push({ name: "addAddress", params: { item, index } });
      console.log("已发送");
    },
    onSelect(item, index) {
      this.chosenAddressId = index + 1;
      Toast("选择地址成功");
      this.$router.push({ name: "order", params: { item } });
      // PubSub.publish("contact_address", item);
      // console.log("发送成功");
    },
  },
  mounted() {
    this.INIT_ADDRESS();
  },
  computed: {
    ...mapState(["address_list"]),
  },
};
</script>

<style scoped>
/* @import url(); 引入css类 */
</style>
