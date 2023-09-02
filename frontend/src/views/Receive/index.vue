<template>
  <section class="Receive">
   <button v-if="status" @click="handleClose">关闭</button>
   <button v-else @click="handleOpen">开启</button>
   <div v-if="status">请使用浏览器访问192.168.0.1:8090</div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
let status = ref(false)
const handleOpen = () => {
  status.value = true
}

const handleClose = () => {
  status.value = false
}

</script>
<style lang="scss" scoped>
.Receive{
  font-size: 24px;
  height: 100%;
  overflow: scroll;
  @include scroll-bar-none();
  background-color: $--tabBarColor;
  border-radius: 10px;
  padding: 10px;
}
</style>
