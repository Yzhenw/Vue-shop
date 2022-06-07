<template>
  <div id="keylog">
    <van-form @submit="onSubmit">
      <van-field
        v-model="user_name"
        name="user_name"
        label="用户名"
        placeholder="请填写用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      >
      </van-field>
      <van-field
        v-model="user_pwd"
        type="password"
        name="user_pwd"
        label="密码"
        placeholder="请填写密码"
        :rules="[{ required: false, message: '请填写密码' }]"
      />
      <van-field
        v-model="captcha"
        name="captcha"
        center
        clearable
        label="验证码"
        placeholder="请输入验证码"
      >
        <template #button>
          <van-button size="normal" type="default">
            <van-image width="1.5rem" fit="contain" src="./verify.png" />
          </van-button>
        </template>
      </van-field>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit" color="#69c5dd"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { userPwdLogin } from "./../../../service/api/index";
import { mapActions } from "vuex";
export default {
  name: "keylog",
  data() {
    return {
      user_name: "",
      user_pwd: "",
      captcha: "", //图形验证码
      useInfo: {},
    };
  },
  methods: {
    ...mapActions(["syncUserInfo"]),
    async onSubmit(values) {
      //用户名密码登录
      let res = await userPwdLogin(
        values.user_name,
        values.user_pwd,
        values.captcha
      );
      console.log(res); //输出结果 就当登录上了吧
      this.useInfo = {
        user_name: values.user_name,
        user_pwd: values.user_pwd,
        token: "ok",
      };
      //将用户信息插入到state中
      this.syncUserInfo(this.useInfo);
      //返回上一页面
      this.$router.push("/dashboard/home");
    },
  },
};
</script>

<style scoped>
/* @import url(); 引入css类 */
</style>
