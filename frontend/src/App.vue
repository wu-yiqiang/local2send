<template>
   <div class="router">
    <router-view />
  </div>
  <FooterBar />
</template>

<script setup>
import Layout from '@/Layout/index.vue'
import FooterBar from '@/components/FooterBar/index.vue'
</script>
<style lang="scss" scoped>
.router {
  color: $--text-color;
  height: calc(109.7% - $--footer-height);
  padding: $--pagePadding;
  overflow: hidden;
  background: $--pageBackgroundColor;
}
</style>
