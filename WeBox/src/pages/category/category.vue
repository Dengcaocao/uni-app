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
  border-bottom: 1px solid $uni-border-color;
  .category-item {
    display: inline-block;
    padding: 0 $uni-spacing-row-lg;
    font-weight: bold;
    line-height: 80rpx;
  }
  .category-item.active {
    position: relative;
    color: $uni-bg-color;
  }
  .category-item.active::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 99;
    width: 100%;
    height: 2rpx;
    background-color: $uni-bg-color;
  }
}
.content {
  padding: $uni-spacing-row-lg;
  .demo-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
