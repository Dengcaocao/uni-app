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
      <swiper-item
        v-for="item in banner"
        :key="item.uuid"
        @click="handleView(item.link)"
      >
        <image class="banner-image" :src="item.pic" lazy-load />
      </swiper-item>
    </swiper>

    <view class="firend-chain">
      <view
        class="item"
        v-for="item in firendChain"
        :key="item.uuid"
        @click="pageHome(item.link)"
      >
        <image :src="item.avatar" lazy-load />
        <view class="nickname single-line-text">{{item.nickName}}</view>
      </view>
    </view>

    <view class="up-to-date">
      <view class="head">最新</view>
      <view class="demo-list">
        <demo-item
          v-for="item in catetory"
          :key="item.uuid"
          :data="item"
          @click="viewDetails(item.uuid)" />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import type dayjs from 'dayjs'
import DemoItem from '@/components/demoItem.vue'
import Api from '@/api/index'

interface BannerDataType {
  uuid: string,
  pic: string,
  link: string
}

const banner = reactive<BannerDataType[]>([])
const getBanner = async () => {
  try {
    const res = await Api.queryBanner()
    Object.assign(banner, res.data)
  } catch (error) {
    console.log(error)
  }
}

interface FirendChainDataType {
  uuid: string,
  avatar: string,
  nickName: string,
  tag: string[],
  link: string,
  status: string
}

const firendChain = reactive<FirendChainDataType[]>([])
const getFirendChain = async () => {
  try {
    const res = await Api.queryFirendChain()
    Object.assign(firendChain, res.data)
  } catch (error) {
    console.log(error)
  }
}

export interface CatetoryDataType {
  uuid: string,
  title: string,
  description: string,
  pic: string,
  link: string,
  type: string,
  status: string,
  content: string,
  created_at: dayjs.Dayjs
}

export interface CatetoryDataListType {
  uuid: string,
  name: string,
  data: CatetoryDataType[]
}

const catetory = reactive<CatetoryDataType[]>([])
const getCatetory = async () => {
  const res = await Api.queryCatetory()
  const upToDateData = res.data
    .map((item: CatetoryDataListType) => item.data)
    .map((item: CatetoryDataType[]) => item.slice(0, 5)) // 取前5
    .flat()
  // 处理直接赋值视图不更新的问题
  Object.assign(catetory, upToDateData)
}

const handleView = (url: string) => {
  uni.navigateTo({ url: `/pages/preview/preview?url=${url}` })
}

const pageHome = (url: string) => {
  window.open(url)
}

const viewDetails = (uuid: string) => {
  uni.navigateTo({ url: `/pages/details/details?uuid=${uuid}` })
}

onMounted(() => {
  getBanner()
  getFirendChain()
  getCatetory()
})
</script>
<style scoped>
.swiper>>>.uni-swiper-wrapper {
  border-radius: 16rpx;
}
</style>
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
  height: 375rpx;
  padding: $uni-spacing-row-lg;
  border-radius: $uni-border-radius-lg;
  .banner-image,
  .banner-image img {
    width: 100%;
    height: 100%;
  }
}
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
    font-weight: 600;
    color: $uni-text-color;
    letter-spacing: 4rpx;
    padding-bottom: $uni-spacing-col-base;
  }
  .demo-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
