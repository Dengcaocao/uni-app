<template>
  <scroll-view class="category shadow2" :scroll-x="true">
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
      <demo-item
        v-for="item in categoryData"
        :key="item.uuid"
        :data="item"
        @click="viewDetails(item.uuid)" />
    </view>
  </view>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import type { CatetoryDataType, CatetoryDataListType } from '@/pages/index/index.vue'
import DemoItem from '@/components/demoItem.vue'
import Api from '@/api/index'

interface CategoryType {
  uuid: string,
  name: string
}

const categoryData = ref<CatetoryDataType[]>([])

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
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #fff;
  color: $uni-text-color-placeholder;
  .category-item {
    display: inline-block;
    padding: 0 $uni-spacing-row-lg;
    font-weight: bold;
    line-height: 88rpx;
  }
  .category-item.active {
    position: relative;
    color: $uni-text-color;
  }
  .category-item.active::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    z-index: 99;
    transform: translateX(-50%);
    width: 66rpx;
    height: 6rpx;
    border-radius: 6rpx;
    background-color: $uni-text-color;
  }
}
.content {
  position: relative;
  padding: $uni-spacing-row-lg;
  .demo-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
