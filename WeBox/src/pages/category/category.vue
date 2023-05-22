<template>
  <scroll-view class="category" :scroll-x="true">
    <text
      class="category-item"
      :class="{'active': activeIndex === index}"
      v-for="(item, index) in category"
      :key="item.uuid"
      @click="handleActive(item.uuid, index)"
    >
      {{item.name}}
    </text>
  </scroll-view>
  <view class="content">
    <view class="demo-list">
      <view
        class="demo-item shadow2"
        v-for="item in categoryData"
        :key="item.uuid"
        @click="viewDetails(item.uuid)"
      >
        <image class="preview-img" :src="item.pic" mode="widthFix" lazy-load />
        <view class="info">
          <view class="title single-line-text">{{item.title}}</view>
          <view class="description single-line-text">{{item.description}}</view>
          <view class="footer">
            <view class="author">Deng·草草</view>
            <view class="date">{{dayjs(item.created_at).fromNow()}}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import type { CatetoryDataType, CatetoryDataListType } from '@/pages/index/index.vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'
import Api from '@/api/index'

dayjs.extend(relativeTime)
dayjs.extend(updateLocale)
dayjs.updateLocale('en', {
  relativeTime: {
    future: 'in %m',
    past: '%s 前',
    s: '秒',
    m: '分',
    mm: '%d 分',
    h: '小时',
    hh: '%d 小时',
    d: '天',
    dd: '%d 天',
    M: '月',
    MM: '%d 月',
    y: 'a 年',
    yy: '%d 年'
  }
})

interface CategoryType {
  uuid: string,
  name: string
}

let categoryData = ref<CatetoryDataType[]>([])

const category = reactive<CategoryType[]>([])
const data = reactive<CatetoryDataListType[]>([])
const getCatetoryData = async () => {
  const res = await Api.queryCatetory()
  // 设置分类列表
  const formateCategory = res.data
    .map((item: CatetoryDataListType) => ({ 
      uuid: item.uuid,
      name: item.name
     }))
  Object.assign(category, formateCategory)
  Object.assign(data, res.data)
  // Object.assign(categoryData, data[0].data)
  categoryData.value = data[0].data

}

const activeIndex = ref<number>(0)
const handleActive = (uuid: string, index: number) => {
  activeIndex.value = index
  const curCategoryData = data
    .filter(item => item.uuid === uuid)
    .map(item => item.data)
    .flat()
  categoryData.value = curCategoryData
}

const viewDetails = (uuid: string) => {
  uni.navigateTo({ url: `/pages/details/details?uuid=${uuid}` })
}

onMounted(() => {
  getCatetoryData()
})
</script>
<style scoped lang="scss">
.category {
  height: 80rpx;
  border-bottom: 1px solid $uni-border-color;
  .category-item {
    padding: 0 $uni-spacing-row-lg;
    font-weight: bold;
    height: 80rpx;
    line-height: 80rpx;
  }
  .category-item.active {
    // position: relative;
    // left: 0;
    // right: 0;
    // bottom: 0;
    // height: 10rpx;
    color: $uni-bg-color;
    // background-color: $uni-bg-color;
  }
}
.content {
  padding: $uni-spacing-row-lg;
  .demo-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .demo-item {
      overflow: hidden;
      display: flex;
      flex-direction: column;
      width: 339rpx;
      margin-top: 32rpx;
      padding-bottom: $uni-spacing-col-sm;
      border-radius: $uni-border-radius-base;
      .preview-img {
        width: 100%;
        background-color: $uni-bg-color;
      }
      .info {
        font-size: $uni-font-size-sm;
        padding: $uni-spacing-row-base;
        .title {
          font-size: $uni-font-size-base;
          color: $uni-text-color;
          font-weight: 600;
        }
        .description {
          margin: $uni-spacing-col-sm 0;
          color: $uni-text-color-grey;
        }
        .footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: $uni-text-color-placeholder;
        }
      }
    }
  }
}
</style>
