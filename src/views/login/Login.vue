<template>
  <div id="login">
    <header>
      <h1>小磊买菜</h1>
    </header>
    <main class="logways">
      <router-link tag="a" to="/login/tellog">手机登录</router-link>
      <span>|</span>
      <router-link tag="a" to="/login/keylog">密码登录</router-link>
    </main>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  },
};
</script>

<style scoped>
/* @import url(); 引入css类 */
#login {
  background-color: #fff;
  height: 35rem;
}
header {
  color: #2e393b;
  text-align: center;
  padding-top: 5rem;
}
.logways {
  margin: 1.5rem 0;
  display: flex;
  justify-content: center;
}
a {
  padding: 0 0.4rem;
  color: #2e393b;
}
.router-link-active {
  text-decoration: underline;
}
</style>
