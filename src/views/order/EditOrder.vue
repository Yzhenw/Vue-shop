<template>
  <div id="editorder">
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
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "EditOrder",
  data() {
    return {
      areaList: {},
      searchResult: [],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    onSave() {
      Toast("save");
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
};
</script>

<style scoped>
/* @import url(); 引入css类 */
</style>
