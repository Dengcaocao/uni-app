<template>
  <view class="content">
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
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello',
    }
  },
  onLoad() {},
  methods: {},
}
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
