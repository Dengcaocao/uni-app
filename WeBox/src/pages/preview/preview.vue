<template>
  <web-view :src="url" />
</template>
<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

const url = ref<string>('')
onLoad((params) => {
  url.value = params?.url
})
</script>
