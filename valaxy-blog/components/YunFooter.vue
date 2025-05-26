<script lang="ts" setup>
import { useScriptTag } from '@vueuse/core'
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue'

useScriptTag('//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js')
</script>

<template>
  <YunFooter>
    <!-- 萌站相关区块 -->
    <div style="display: flex; justify-content: center; width: 100%; margin: 0.5rem 0;">
      <a href="https://icp.gov.moe/?keyword=20252111" target="_blank" style="display: inline-flex; align-items: center;">
        萌ICP备20252111号
      </a>
      <span style="margin: 0 8px;">|</span>
      <a 
        style="text-decoration:none; color:#e77c8e; display:inline-flex; align-items:center; gap:4px;" 
        href="https://travel.moe/go.html" 
        title="异次元之旅-跃迁-我们一起去萌站成员的星球旅行吧！" 
        target="_blank"
      >
        <img src="https://travel.moe/images/icon/icon64pink.png" style="width:24px;height:24px;">
        异次元之旅
      </a>
    </div>
    <!-- 不蒜子统计 -->
    <div>本站总访问量 <span id="busuanzi_value_site_pv" /> 次</div>
    <div>本站访客数 <span id="busuanzi_value_site_uv" /> 人次</div>
  </YunFooter>
</template>