<template>
  <section class="Window">
   <Dialog />
   <Input />
  </section>
</template>
<script setup>
import { reactive, watch, computed, ref } from 'vue'
import Dialog from './dialog.vue';
import Input  from './input.vue';
</script>
<style lang="scss" scoped>
.Window{
  background-color: $--tabBarColor;
  border-left: 1px solid gray;
  border-radius: 0 $--boder-spacing-3 $--boder-spacing-3 0;
  .Dialog {
    height: 80%;
    overflow-y: scroll;
    @include scroll-bar-none();
    padding: $--pagePadding;
  }
  .Input {
    height: 20%;
    padding: $--pagePadding;
  }
}
</style>
