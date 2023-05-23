<template>
  <view class="navbar">
    <view class="back" @click="handleBack"></view>
  </view>
  <image
    class="preview-img"
    mode="widthFix"
    lazy-load
    :src="currentData.pic" />
  <view class="container">
    <view class="title">
      <text>{{currentData.title}}</text>
      <button size="mini" plain="true" @click="preview(currentData.link)">预览</button>
    </view>
    <view class="description">{{currentData.description}}</view>
    <view class="content">
      <rich-text :nodes="currentData.content" />
    </view>
  </view>
</template>
<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { reactive, onMounted, ref } from 'vue'
import type { CatetoryDataType, CatetoryDataListType } from '@/pages/index/index.vue'
import Api from '@/api/index'

const uuid = ref<string>('')

onLoad((params) => {
  uuid.value = params?.uuid
})

const catetoryData = reactive<CatetoryDataType[]>([])
const getCatetoryData = async () => {
  const res = await Api.queryCatetory()
  const data = res.data
    .map((item: CatetoryDataListType) => item.data)
    .flat()
  // 处理直接赋值视图不更新的问题
  Object.assign(catetoryData, data)
}

const currentData = reactive<CatetoryDataType | any>({})
const handleQuery = () => {
  const data = catetoryData.find(item => item.uuid === uuid.value) as CatetoryDataType
  Object.assign(currentData, data)
}

const preview = (url: string) => {
  // window.open(url)
  uni.navigateTo({ url: `/pages/preview/preview?url=${url}` })
}

const handleBack = () => {
  uni.navigateBack()
}

onMounted(async () => {
  await getCatetoryData()
  handleQuery()
})
</script>
<style scoped lang="scss">
.navbar {
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 44px;
  padding: 7px 3px;
  box-sizing: border-box;
  .back {
    position: absolute;
    left: 0;
    top: 50%;
    width: 30rpx;
    height: 30rpx;
    transform: translate(80%, -50%) rotate(45deg);
    border-radius: 4rpx;
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;
  }
}
.preview-img {
  width: 100%;
  background-color: $uni-bg-color;
}
.container {
  padding: $uni-spacing-row-lg;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: $uni-font-size-lg;
    font-weight: 600;
    color: $uni-text-color;
    button {
      margin: 0;
    }
  }
  .description {
    margin: $uni-spacing-col-base 0;
    padding: $uni-spacing-col-base;
    border-radius: $uni-border-radius-base;
    font-size: $uni-font-size-sm;
    color: $uni-text-color-placeholder;
    background-color: #F1F2F4;
  }
  .content {
    color: $uni-text-color;
    font-weight: 500;
    letter-spacing: 2rpx;
  }
}
</style>
