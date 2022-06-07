<template>
  <div id="addAddress">
    <van-nav-bar
      title="我的地址"
      left-text="返回"
      left-arrow
      :fixed="true"
      @click-left="onClickLeft"
    />
    <div style="margin-top: 3rem">
      <van-address-edit
        :area-list="areaList"
        :disable-area="false"
        show-postal
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
      />
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { areaList } from "@vant/area-data";
import { mapMutations } from "vuex";

export default {
  name: "addAddress",
  data() {
    return {
      areaList,
      searchResult: [],
    };
  },
  methods: {
    ...mapMutations(["ADDRESS"]),
    onClickLeft() {
      this.$router.back();
    },
    onSave(content) {
      // console.log(content);
      let Address = {};
      Address.name = content.name;
      Address.tel = content.tel;
      Address.address =
        content.province +
        content.city +
        content.county +
        content.addressDetail;
      this.ADDRESS(Address);
      this.$router.back();
    },
  },
  mounted() {
    // console.log(this.$route.params.item);
  },
};
</script>

<style scoped>
/* @import url(); 引入css类 */
</style>
