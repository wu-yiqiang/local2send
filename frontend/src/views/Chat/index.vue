<template>
  <section class="Chat">
    <List />
    <window />
  </section>
</template>
<script setup>
import List from './list.vue'
import Window from './window.vue';
</script>
<style lang="scss">
.Chat{
  color: aliceblue;
  display: flex;
  height: 100%;
  .List {
    width: 25%;
    height: 100%;
  }
  .Window {
    width: 75%;
    height: 100%;
  }
}
</style>