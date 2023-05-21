<template>
  <image class="preview-img" lazy-load />
  <view class="container">
    <view class="title"></view>

  </view>
</template>
<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'

onLoad((info: any) => {
  console.log(info)
})
</script>
