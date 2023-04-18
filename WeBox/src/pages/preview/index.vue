<template>
  <web-view :src="h5Link" />
</template>
<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
const h5Link = ref('')
onLoad(({ link }: any) => {
  h5Link.value = link
})
</script>
