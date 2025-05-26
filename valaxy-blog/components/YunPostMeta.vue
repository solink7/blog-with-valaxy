<script lang="ts" setup>
import type { Post } from 'valaxy'
import { useLayout } from 'valaxy'
import YunPostMeta from 'valaxy-theme-yun/components/YunPostMeta.vue'
import { useScriptTag } from '@vueuse/core'

useScriptTag('//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js')

defineProps<{
  frontmatter: Post
}>()

// 仅在 Post 布局显示
const isPost = useLayout('post')
</script>

<template>
  <YunPostMeta :frontmatter="frontmatter">
    <span v-if="isPost" id="busuanzi_container_page_pv">
      本文总阅读量 <span id="busuanzi_value_page_pv" /> 次
    </span>
  </YunPostMeta>
</template>