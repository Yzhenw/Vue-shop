import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store";

//1.配置FastClick
import FastClick from "fastclick";

//2.引入全局样式
import "@/style/common.less";

//3.引入全局过滤器
import "@/config/filters";

Vue.config.productionTip = false;

if ("addEventListener" in document) {
  document.addEventListener(
    "DOMContentLoaded",
    function () {
      FastClick.attach(document.body);
    },
    false
  );
}

//3.引入全局组件库
import "./plugins/vant";

//4.引入rem
import "./config/rem.js";

//工程化 手动挂载
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
