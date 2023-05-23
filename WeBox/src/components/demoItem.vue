<template>
  <view class="demo-item shadow2">
    <image class="preview-img" :src="data?.pic" mode="widthFix" lazy-load />
    <view class="info">
      <view class="title single-line-text">{{data?.title}}</view>
      <view class="description single-line-text">{{data?.description}}</view>
      <view class="footer">
        <view class="author">Deng·草草</view>
        <view class="date">{{dayjs(data?.created_at).fromNow()}}</view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'

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

defineProps({
  data: {
    type: Object,
    require: true
  }
})
</script>
<style scoped lang="scss">
.demo-item {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 339rpx;
  margin-bottom: $uni-spacing-col-lg;
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
</style>
