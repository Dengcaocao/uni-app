<template>
  <image class="preview-img" lazy-load :src="currentData.pic" />
  <view class="container">
    <view class="title"></view>
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

let currentData = reactive<CatetoryDataType>({})
const handleQuery = () => {
  currentData = catetoryData.find(item => item.uuid === uuid.value) as CatetoryDataType
}

onMounted(async () => {
  await getCatetoryData()
  handleQuery()
})
</script>
