<template>
  <div id="mine">
    <van-nav-bar title="我的" :fixed="true" :placeholder="true" border />

    <!-- 个人简介 -->
    <van-cell value="">
      <!-- 使用 title 插槽来自定义标题 -->
      <div class="myIntro">
        <van-image
          round
          width="4rem"
          height="4rem"
          fit="cover"
          src="https://wx1.sinaimg.cn/mw2000/007VBDcagy1gyi6lczi5nj32bc2bcqv5.jpg"
        />
        <div class="mes">
          <p>用户：AKA赵蕊</p>
          <p>微信号:zl19990101</p>
        </div>
      </div>
    </van-cell>
    <!-- 订单 -->
    <van-cell
      center
      is-link
      value="查看全部订单"
      title="我的订单"
      icon="label"
    ></van-cell>
    <!-- 宫格 -->
    <van-grid :border="false">
      <van-grid-item icon="pending-payment" text="待支付" />
      <van-grid-item icon="paid" text="待收货" />
      <van-grid-item icon="chat-o" text="待评价" />
      <van-grid-item icon="cash-back-record" text="售后/退款" />
    </van-grid>
    <!-- 优惠券&收货地址 -->
    <van-cell-group style="margin: 0.5rem 0;">
      <van-cell
        center
        is-link
        value="1张"
        title="我的优惠券"
        icon="gold-coin"
      ></van-cell>
      <van-cell
        center
        is-link
        value=""
        title="我的收货地址"
        icon="balance-list"
      ></van-cell>
    </van-cell-group>
    <!-- 联系客服&意见反馈 -->
    <van-cell-group style="margin-bottom: 0.5rem;">
      <van-cell
        center
        is-link
        value=" 07：00-22：00"
        title="联系客服"
        icon="phone"
      ></van-cell>
      <van-cell
        center
        is-link
        value=""
        title="意见反馈"
        icon="comment"
      ></van-cell>
    </van-cell-group>
    <!-- 更多 -->
    <van-cell
      center
      is-link
      value="数字专辑火热销售中~"
      icon="fire"
      title="进击之月"
    ></van-cell>
    <van-button
      type="primary"
      round
      color="#69c5dd"
      size="large"
      style="margin-top: 1rem;"
      @click="userOut()"
    >
      退出登录
    </van-button>
  </div>
</template>

<script>
import { delCookie, removeStore } from './../../config/global'
import { userLogout } from './../../service/api/loginApi'
import { Dialog } from 'vant'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Mine',
  data() {
    return {}
  },
  computed: {
    ...mapState(['userInfo']),
  },
  methods: {
    ...mapMutations(['CLEAR_USER']),
    userOut() {
      Dialog.confirm({
        title: '小磊提示',
        message: '你确定要退出登录吗',
      })
        .then(async () => {
          delCookie('token')
          let res = await userLogout()
          if (res.data.status === 200) {
            removeStore('account')
            this.$router.push('/dashboard/home')
          }
        })
        .catch(() => {
          // on cancel
        })
      // this.CLEAR_USER();
    },
  },
}
</script>

<style lang="less" scoped>
#mine {
  width: 100%;
  height: 100%;
  background-color: transparent;
  // #69C5DD
}
.myIntro {
  display: flex;
  align-items: center;
}
.mes {
  margin-left: 1rem;
}
.van-cell__left-icon {
  color: #69c5dd;
  font-size: 20px;
}
</style>
