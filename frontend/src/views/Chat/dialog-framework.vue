<template>
  <section class="DialogFrameWork">
    <div class="avator">
      <img :src="target.img" alt="">
    </div>
    <div class="name">{{ target.hostName }}</div>
    <div class="content">{{ target.content }}</div>
  </section>
</template>
<script setup>
import { reactive, watch, computed, ref, onMounted } from 'vue'
const props = defineProps({
  target: {
    require: true,
    type: Object,
    default: () => {}
  }
})

</script>
<style lang="scss" scoped>
.DialogFrameWork{
  border: 1px solid green;
  color: green;
  
}
</style>
