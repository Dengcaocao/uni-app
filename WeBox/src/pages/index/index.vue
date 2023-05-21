<template>
  <view class="product-container">
    <view class="product-info">
      <view class="product-title">WeBox</view>
      <view class="product-desc">小样展示平台</view>
    </view>
    <view class="product-icon">
      <view>we</view>
      <view>box</view>
    </view>
  </view>
  <view class="content">
    <swiper
      class="swiper"
      circular
      :indicator-dots="true"
      indicator-active-color="#FFFFFF"
      :autoplay="true"
      :interval="2000"
      :duration="500">
      <swiper-item v-for="item in banner" :key="item.uuid">
        <image class="banner-image" :src="item.pic" />
      </swiper-item>
    </swiper>

    <view class="firend-chain">
      <view
        class="item"
        v-for="item in firendChain"
        :key="item.uuid"
        @click="pageHome(item.link)"
      >
        <image :src="item.avatar" />
        <view class="nickname single-line-text">{{item.nickName}}</view>
      </view>
    </view>

    <view class="up-to-date">
      <view class="head">最新</view>
      <view class="demo-list">
        <view
          class="demo-item"
          v-for="item in catetory"
          :key="item.uuid"
        >
          <image class="preview-img" :src="item.pic" />
          <view class="info">
            <view class="title">{{item.title}}</view>
            <view class="description">{{item.description}}</view>
            <view class="date">3天前</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import type { bannerType, catetoryType } from '@/types/index-type'
import Api from '@/api/index'

let banner: bannerType[] = reactive([])
const getBanner = async () => {
  try {
    const res: any = await Api.queryBanner()
    Object.assign(banner, res.data.data)
  } catch (error) {
    console.log(error)
  }
}

let firendChain: bannerType[] = reactive([])
const getFirendChain = async () => {
  try {
    const res: any = await Api.queryFirendChain()
    Object.assign(firendChain, res.data.data)
  } catch (error) {
    console.log(error)
  }
}

let catetory: any[] = reactive([])
const getCatetory = async () => {
  const res: any = await Api.queryCatetory()
  const upToDateData = res.data.data
    .map((item: any) => item.data)
    .map((item: any) => item.slice(0, 5)) // 取前5
    .flat()
  // 处理直接赋值视图不更新的问题
  Object.assign(catetory, upToDateData)
}

const pageHome = (url: string) => {
  window.open(url)
}

const preview = (link: string) => {
  uni.navigateTo({
	  url: `/pages/preview/index?link=${link}`
  })
}

onMounted(async () => {
  getBanner()
  getFirendChain()
  getCatetory()
})
</script>
<style scoped lang="scss">
.product-container {
  display: flex;
  justify-content: space-between;
  height: 300rpx;
  padding: 60rpx $uni-spacing-row-lg $uni-spacing-row-lg $uni-spacing-row-lg;
  background-image: linear-gradient($uni-bg-color 50%, #FFFFFF);
  .product-info {
    .product-title {
      font-size: 54rpx;
      font-weight: bolder;
      letter-spacing: 4rpx;
    }
    .product-desc {
      letter-spacing: 12rpx;
      font-size: $uni-font-size-sm;
    }
  }
  .product-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80rpx;
    height: 80rpx;
    color: #fff;
    margin-right: 60rpx;
    font-size: $uni-font-size-base;
    font-weight: 600;
    line-height: $uni-font-size-base;
    border-radius: $uni-border-radius-sm;
    background-color: #00b96b;
  }
}
.content {
  margin-top: -180rpx;
}

.swiper {
  height: 300rpx;
  padding: $uni-spacing-row-lg;
  border-radius: $uni-border-radius-lg;
  .banner-image,
  .banner-image img {
    width: 100%;
    height: 100%;
  }
}
// .swiper .uni-swiper-wrapper {
//   border-radius: $uni-border-radius-lg;
// }
.firend-chain {
  display: grid;
  grid-template-columns: repeat(4, 120rpx);
  grid-gap: 48rpx calc((270rpx - 48rpx)/3);
  padding: 24rpx;
  background-color: #fff;
  .item {
    overflow: hidden;
    width: 120rpx;
    text-align: center;
    image {
      width: 90rpx;
      height: 90rpx;
      background-color: $uni-bg-color;
      border-radius: $uni-border-radius-circle;
    }
    .nickname {
      font-size: $uni-font-size-sm;
      color: $uni-text-color;
    }
  }
}
.up-to-date {
  padding: $uni-spacing-row-lg;
  .head {
    font-size: $uni-font-size-base;
    font-weight: 600;
    color: $uni-text-color;
    letter-spacing: 4rpx;
  }
  .demo-item {
    display: flex;
    // align-items: center;
    margin-top: 32rpx;
    .preview-img {
      width: 180rpx;
      height: 180rpx;
      border-radius: $uni-border-radius-base;
      background-color: $uni-bg-color;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      font-size: $uni-font-size-base;
      margin-left: $uni-spacing-row-lg;
      .title {
        font-size: $uni-font-size-lg;
        color: $uni-text-color;
        font-weight: 600;
        // padding-bottom: $uni-spacing-col-sm;
      }
      .description {
        color: $uni-text-color-grey;
      }
      .date {
        color: $uni-text-color-placeholder;
      }
    }
  }
}
</style>
