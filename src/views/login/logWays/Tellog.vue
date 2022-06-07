<template>
  <div id="tellog">
    <van-form @submit="onSubmit">
      <van-field
        v-model="tel"
        center
        clearable
        name="Tel"
        type="tel"
        label="手机号"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      >
        <template #button>
          <van-button
            plain
            v-if="flag"
            type="info"
            size="small"
            :disabled="telRight"
            @click="getPhoneVerifyCode()"
          >
            发送验证码
          </van-button>
          <van-button
            v-else
            disabled
            type="default"
            size="small"
            style="border: none;"
          >
            已发送({{ countDown }}s)
          </van-button>
        </template>
      </van-field>
      <van-field
        v-model="verify"
        type="number"
        name="Code"
        label="验证码"
        placeholder="验证码"
        :rules="[{ required: true, message: '请填写验证码' }]"
      />
      <div style="margin: 16px;">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          color="#69c5dd"
        >
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { getPhoneCode, getPhoneLogin } from './../../../service/api/loginApi'
import { setStore, removeStore } from './../../../config/global'
import { mapActions } from 'vuex'
export default {
  name: 'Tellog',
  data() {
    return {
      tel: '',
      verify: '',
      // /1\d{10}/,
      countDown: 10,
      flag: true,
      useInfo: {},
    }
  },
  methods: {
    ...mapActions(['syncUserInfo']),
    async onSubmit(values) {
      //手机短信验证
      let result = await getPhoneLogin({
        phone: values.Tel,
        code: values.Code,
      })
      if (result.status === 200) {
        setStore('account', values.Tel)
        this.$router.back()
      }
    },
    async getPhoneVerifyCode() {
      this.flag = false
      let timer = setInterval(() => {
        this.countDown--
        if (this.countDown === 0) {
          clearInterval(timer)
          this.flag = true
          this.countDown = 10
        }
      }, 1000)
      // 获取短信验证码
      let res = await getPhoneCode(this.tel)
      console.log(this.tel, res)
    },
  },
  computed: {
    telRight() {
      return !/1\d{10}/.test(this.tel)
    },
  },
}
</script>

<style scoped>
/* @import url(); 引入css类 */
</style>
