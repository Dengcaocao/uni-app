<template>
  <view class="uni-margin-wrap">
    <swiper
      class="swiper"
      circular
      :indicator-dots="true"
      indicator-active-color="#B0D084"
      :autoplay="true"
      :interval="2000"
      :duration="500">
      <swiper-item v-for="(image, index) in banner" :key="index">
        <image class="banner-image" :src="image.src" />
      </swiper-item>
    </swiper>
  </view>
  <view class="icons">
    <view class="icon">1</view>
    <view class="icon">2</view>
    <view class="icon">3</view>
    <view class="icon">4</view>
    <view class="icon">5</view>
    <view class="icon">6</view>
    <view class="icon">7</view>
    <view class="icon">8</view>
  </view>
  <view class="content-box">
    <view class="content-group">
      <view class="header">
        <view class="title">CSS3动画</view>
        <view class="more">更多</view>
      </view>
      <view class="content">
        <view class="demo shadow">
          <image class="demo-img-small" src="https://img1.baidu.com/it/u=3363566985,99735131&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" />
          <view class="demo-info">
            <view class="demo-title single-line-text">蛇形边界</view>
            <view class="demo-description single-line-text">这TM是真漂亮</view>
          </view>
        </view>
      </view>
    </view>

    <view class="content-group">
      <view class="header">
        <view class="title">CSS3动画</view>
        <view class="more">更多</view>
      </view>
      <view class="content">
        <view class="demo">
          <image class="demo-img-small" src="https://img1.baidu.com/it/u=3363566985,99735131&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" />
          <view class="demo-info">
            <view class="demo-title single-line-text">蛇形边界</view>
            <view class="demo-description single-line-text">这TM是真漂亮</view>
          </view>
        </view>
      </view>
    </view>

    <view class="content-group">
      <view class="header">
        <view class="title">CSS3动画</view>
        <view class="more">更多</view>
      </view>
      <view class="content">
        <view class="demo">
          <image class="demo-img-small" src="https://img1.baidu.com/it/u=3363566985,99735131&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" />
          <view class="demo-info">
            <view class="demo-title single-line-text">蛇形边界</view>
            <view class="demo-description single-line-text">这TM是真漂亮</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import Api from '@/api/index'

const banner = reactive([
  {
    src: 'https://img1.baidu.com/it/u=3363566985,99735131&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500'
  },
  {
    src: 'https://img1.baidu.com/it/u=2135316162,3264555983&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500'
  },
  {
    src: 'https://img2.baidu.com/it/u=3089456875,3715235379&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
  }
])

onMounted(async () => {
  const res = await Api.getBanner()
  console.log(res)
})
</script>
<style scoped lang="scss">
.swiper {
  height: 300rpx;
  .banner-image,
  .banner-image img {
    width: 100%;
    height: 100%;
  }
}
.swiper-item {
  display: block;
  height: 300rpx;
  line-height: 300rpx;
  text-align: center;
}
.icons {
  display: grid;
  grid-template-columns: repeat(4, 90rpx);
  grid-gap: 48rpx calc((390rpx - 48rpx)/3);
  padding: 24rpx;
  background-color: #fff;
  .icon {
    width: 90rpx;
    height: 90rpx;
    line-height: 90rpx;
    text-align: center;
    background-color: yellowgreen;
    border-radius: $uni-border-radius-circle;
  }
}
.content-box {
  overflow: hidden;
  background-color: #f6f7fa;
  .content-group {
    margin-top: $uni-spacing-col-lg;
    padding: $uni-spacing-row-base;
    background-color: #fff;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title {
        font-size: 32rpx;
      }
      .more {
        font-size: 24rpx;
        color: $uni-text-color-grey;
      }
    }
    .content {
      display: flex;
      justify-content: space-between;
      margin-top: $uni-spacing-col-base;
      .demo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 340rpx;
        height: 120rpx;
        padding: $uni-spacing-row-base;
        box-sizing: border-box;
        border-radius: 8rpx;
        background-color: $uni-bg-color-hover;
        .demo-img-small {
          width: 98rpx;
          height: 100%;
          margin-right: $uni-spacing-row-base;
          flex-shrink: 0;
        }
        .demo-info {
          flex: 1;
          .demo-title {
            width: 100rpx;
            font-size: $uni-font-size-base;
            color: #fff;
          }
          .demo-description {
            font-size: $uni-font-size-sm;
            color: $uni-text-color-placeholder;
            line-height: 32rpx;
          }
        }
      }
    }
  }
}
</style>
