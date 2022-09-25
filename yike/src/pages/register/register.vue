<template>
  <view>
    <!-- 这里是状态栏 -->
    <view class="status_bar"></view>
    <view class="navigation">
      <image  class="back" src="@/static/back.png" mode="aspectFit" lazy-load="false" />
      <image class="close" src="@/static/close.png" mode="aspectFit" lazy-load="false" />
    </view>
    <!-- logo -->
    <image class="logo" mode="aspectFit" src="@/static/logo.png"></image>
    <view class="content">
      <view class="title">注册</view>
      <form @submit="formSubmit" @reset="formReset">
				<view class="uni-form-item uni-column">
					<input class="uni-input" placeholder-class="placeholder-style" name="user" placeholder="账号" />
          <view class="tips-text">用户名已存在</view>
				</view>
        <view class="uni-form-item uni-column">
					<input class="uni-input" placeholder-class="placeholder-style" name="user" placeholder="邮箱" />
          <view class="tips-text">
            <image style="width: 40rpx;" src="@/static/register/pass.png" mode="aspectFit" lazy-load="false" />
          </view>
				</view>
        <view class="uni-form-item uni-column">
					<input type="password" class="uni-input" placeholder-class="placeholder-style" name="password" placeholder="密码" />
          <view class="tips-text">
            <image style="width: 40rpx;" src="@/static/register/check.png" mode="aspectFit" lazy-load="false" />
          </view>
				</view>
				<view class="uni-btn-v">
					<button form-type="submit">注册</button>
				</view>
			</form>
    </view>
  </view>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const formSubmit = e => {
      console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
      var formdata = e.detail.value
      uni.showModal({
        content: '表单数据内容：' + JSON.stringify(formdata),
        showCancel: false
      })
    }
    return {
      formSubmit
    }
  }
})
</script>

<style scoped lang="scss">
  .navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 88rpx;
    padding: 0 24rpx;
    background-color: $uni-bg-color;
    .close,
    .back {
      width: 36rpx;
      height: 36rpx;
      font-weight: 600;
    }
  }
  .logo {
    width: 192rpx;
    height: 92rpx;
    margin-top: 192rpx;
    margin-left: 50%;
    transform: translateX(-50%);
  }
  .content {
    padding: 0 60rpx;
    .title {
      margin-top: 52rpx;
      font-size: 56rpx;
      color: $uni-text-color;
      font-weight: 500;
    }
    .uni-form-item {
      position: relative;
      border-bottom: 1px solid $uni-border-color;
      .uni-input {
        height: 100rpx;
        margin-top: $uni-spacing-col-lg;
      }
      .tips-text {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        color: $uni-color-error;
        image {
          width: 40rpx;
          height: 40rpx;
        }
      }
      // & /deep/ .placeholder-style {
      //   color: $uni-text-color-placeholder;
      // }
    }
    .uni-btn-v button {
      margin-top: 180rpx;
      width: 520rpx;
      height: 96rpx;
      line-height: 96rpx;
      background: #FFE431;
      box-shadow: 0px 25px 16px -18px rgba(255,228,49,0.4);
      border-radius: 96rpx;
      font-size: 32rpx;
      color: $uni-text-color;
      font-weight: 500;
      &::after {
        border: 0;
      }
    }
  }
</style>
