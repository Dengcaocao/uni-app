<template>
  <view class="content">
    <!-- 这里是状态栏 -->
    <view class="status_bar"></view>
    <view class="header">
      <view class="top-bar">
        <image class="title" src="../../static/index/logo.png" mode="aspectFit" lazy-load="false" />
        <image class="action" src="../../static/index/add.png" mode="aspectFit" lazy-load="false" />
      </view>
      <view class="search-box">
        <view class="input">
          <image class="icon" src="../../static/index/search.png" mode="aspectFit" lazy-load="false" />
          <view>搜索</view>
        </view>
      </view>
    </view>
    <view class="list">
      <uni-list :border="true">
        <!-- 头像显示角标 -->
        <uni-list-chat
          v-for="item in 18"
          :key="item"
          clickable 
          @click="toLogin"
          title="uni-app"
          avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
          note="您收到一条新的消息"
          time="2020-02-02 20:20"
          badge-positon="left"
          badge-text="99">
        </uni-list-chat>
      </uni-list>
    </view>
  </view>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: "App",
  setup () {
    const toLogin = () => {
      uni.navigateTo({
        url: '/pages/login/login'
      })
    }
    return {
      toLogin
    }
  }
})
</script>

<style lang="scss">
  .header {
    border-bottom: 1rpx solid $uni-border-color;
    .top-bar {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      height: 88rpx;
      background-color: $uni-bg-color;
      .title {
        width: 88rpx;
        height: 42rpx;
      }
      .action {
        position: absolute;
        top: 50%;
        right: 32rpx;
        transform: translateY(-50%);
        width: 48rpx;
        height: 48rpx;
      }
    }
    .search-box {
      padding: 10rpx;
      font-size: 28rpx;
      .input {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60rpx;
        border-radius: $uni-border-radius-base;
        background-color: $uni-bg-color-grey;
        color: $uni-text-color-placeholder;
        .icon {
          width: 48rpx;
          height: 48rpx;
        }
      }
    }
  }
</style>
