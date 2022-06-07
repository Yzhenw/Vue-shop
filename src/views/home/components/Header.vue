<template>
  <div class="wrapper">
    <div class="locationWrapper">
      <van-icon name="location" color="#81838E" />
      <span class="address">上海音乐学院</span>
      <van-icon name="arrow-down" color="#81838E" size="0.5rem" />
    </div>
    <div class="searchWrapper">
      <van-search
        v-model="searchValue"
        placeholder="请输入商品名称"
        shape="round"
        @search="onSearch"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    onSearch() {
      console.log(this.searchValue);
    },
  },
};
</script>

<style scoped>
.wrapper {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  height: 3.125rem;
  width: 100%;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.locationWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7.5rem;
}

.locationWrapper .address {
  font-size: 0.85rem;
  padding-right: 0.3rem;
}

.searchWrapper {
  flex: 1;
}
</style>
