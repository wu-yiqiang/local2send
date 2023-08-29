<template>
  <div class="router">
    <router-view />
  </div>
  <FooterBar />
</template>
<script setup>
import FooterBar from '../components/FooterBar/index.vue'
</script>
<style lang="scss" scoped>
.router {
  color: $--text-color;
  height: calc(100% - $--footer-height);
  overflow: hidden;
  padding: $--pagePadding;
  overflow: hidden;
  // background: $--pageBackgroundColor;
  background-color: red;
}
</style>
