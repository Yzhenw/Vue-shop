<template>
  <div id="category">
    <div v-if="!showLoading">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        shape="round"
        @search="onSearch"
        clearable
      />
      <van-tree-select
        :items="items"
        :main-active-index.sync="activeIndex"
        height="560px"
        @click-nav="clickNav"
      >
        <template #content>
          <CateItems
            v-for="val in activeItems"
            :products="val.products"
            :title="val.name"
            :key="val.id"
          />
        </template>
      </van-tree-select>
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
import {
  getCategories,
  getCategoriesDetail,
} from "./../../service/api/index.js";
import CateItems from "./components/CateItems.vue";
export default {
  name: "Category",
  components: { CateItems },
  data() {
    return {
      showLoading: true,
      value: "",
      activeIndex: 0,
      items: [],
      activeItems: [],
    };
  },
  methods: {
    onSearch() {},
    async clickNav(index) {
      let params = index > 5 ? 5 : index;
      const items = await getCategoriesDetail(`/lk00${params + 1}`);
      this.activeItems = items.data.data.cate;
      this.showLoading = false;
      // console.log(this.activeItems);
    },
  },
  async created() {
    let sideRes = await getCategories();
    if (sideRes.status === 200) {
      const res = sideRes.data.data.cate;
      for (let value of res) {
        let { name: text } = value;
        delete value.name;
        value.text = text;
      }
      this.items = res;
    } else {
      console.log("请求数据失败");
    }
    this.clickNav(0);
  },
};
</script>

<style lang="less" scoped>
#category {
  width: 100%;
  height: 100%;
  background-color: transparent;
}
.van-tree-select__content {
  flex: 3;
}
</style>
