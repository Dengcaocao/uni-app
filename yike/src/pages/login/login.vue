<template>
  <view>
    <!-- 这里是状态栏 -->
    <view class="status_bar"></view>
    <view class="navigation">
      <image class="close" src="@/static/close.png" mode="aspectFit" lazy-load="false" />
      <view class="register">注册</view>
    </view>
    <!-- logo -->
    <image class="logo" mode="aspectFit" src="@/static/logo.png"></image>
    <view class="content">
      <view class="title">登录</view>
      <view class="tips">您好，欢迎来到 yike！</view>
      <form @submit="formSubmit" @reset="formReset">
				<view class="uni-form-item uni-column">
					<input class="uni-input" placeholder-class="placeholder-style" name="input" placeholder="账号" />
				</view>
        <view class="uni-form-item uni-column">
					<input type="password" class="uni-input" placeholder-class="placeholder-style" name="input" placeholder="密码" />
				</view>
				<view class="uni-btn-v">
					<button form-type="submit">登录</button>
				</view>
			</form>
    </view>
  </view>
</template>
<style scoped lang="scss">
  .navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 88rpx;
    padding: 0 60rpx;
    background-color: $uni-bg-color;
    .close {
      width: 36rpx;
      height: 36rpx;
    }
    .register {
      font-size: 36rpx;
      color: $uni-text-color;
      font-weight: 500;
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
    .tips {
      margin-top: $uni-spacing-col-base;
      color: $uni-text-color-placeholder;
      font-weight: 300;
      font-size: 36rpx;
    }
    .uni-form-item {
      // height: 60px;
      border-bottom: 1px solid $uni-border-color;
      .uni-input {
        height: 100rpx;
        margin-top: $uni-spacing-col-lg;
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
