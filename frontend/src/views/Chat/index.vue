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
  .List {
    width: 25%;
  }
  .Window {
    width: 75%;
  }
}
</style>