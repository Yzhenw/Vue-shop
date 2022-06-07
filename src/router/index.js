import Vue from "vue";
import VueRouter from "vue-router";
import { getCookie } from "./../config/global";
Vue.use(VueRouter);
//引入一级组件
import Dashboard from "../views/dashboard/Dashboard.vue"; //点进去就需要加载
//因为Home,Cart等等要点进去才需要加载，所以可以使用懒加载
const Home = () => import("../views/home/Home.vue");
const Category = () => import("../views/category/Category.vue");
const Cart = () => import("../views/cart/Cart.vue");
const Mine = () => import("../views/mine/Mine.vue");
const Order = () => import("../views/order/Order.vue");
const SelectAddress = () => import("../views/order/SelectAddress.vue");
const EditOrder = () => import("../views/order/EditOrder.vue");
const AddAddress = () => import("../views/order/AddAddress.vue");
const Login = () => import("../views/login/Login.vue");
const Tellog = () => import("../views/login/logWays/Tellog.vue");
const Keylog = () => import("../views/login/logWays/Keylog.vue");

const routes = [
  { path: "/", redirect: "/dashboard" },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    children: [
      { path: "/dashboard", redirect: "/dashboard/home" },
      {
        path: "home",
        name: "home",
        component: Home,
        meta: { keepAlive: true },
      },
      {
        path: "category",
        name: "category",
        component: Category,
        meta: { keepAlive: true },
      },
      {
        path: "cart",
        name: "cart",
        component: Cart,
        meta: { permission: true }, //给需要守卫的路由添加元信息
      },
      {
        path: "mine",
        name: "mine",
        component: Mine,
        meta: { permission: true }, //给需要守卫的路由添加元信息
      },
    ],
  },
  {
    path: "/order",
    name: "order",
    component: Order,
  },
  {
    path: "/selectaddress",
    name: "selectaddress",
    component: SelectAddress,
  },
  { path: "/editorder", name: "editorder", component: EditOrder },
  { path: "/addAddress", name: "addAddress", component: AddAddress },
  {
    path: "/login",
    name: "login",
    component: Login,
    children: [
      { path: "/login", redirect: "/login/tellog" },
      { path: "tellog", name: "tellog", component: Tellog },
      { path: "keylog", name: "keylog", component: Keylog },
    ],
  },
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  //如果用户访问的登录页，直接放行
  if (to.path === "/login") {
    next();
  } else {
    //访问的不是登录页面
    if (to.meta.permission) {
      //1.检查state中是否存有用户信息（感觉应该看浏览器缓存中有没有 或者一打开浏览器就把缓存拉到state里）
      if (getCookie("token")) {
        //有登录信息
        next();
      } else {
        //没有登录信息，去登陆
        next("/login");
      }
    } else {
      next();
    }
  }
});

export default router;
