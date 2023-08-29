<template>
  <section class="List">
    <div v-for="item, index in lists" :key="index">
      <Item :item="item" />
    </div>
  </section>
</template>
<script setup>
import { reactive, watch, computed, ref } from 'vue'
import Item from './item.vue'
const lists = reactive([
  { os: 'mac', ip: '192.168.0.13', hostName: 'atlas' },
  { os: 'windows', ip: '192.168.0.112', hostName: 'sutter' },
  { os: 'linux', ip: '192.168.0.112', hostName: 'sutter' },
  { os: 'unix', ip: '192.168.0.112', hostName: 'sutter' },
  { os: 'oos', ip: '192.168.0.112', hostName: 'sutter' },
   { os: 'mac', ip: '192.168.0.137', hostName: 's' },
  { os: 'windows', ip: '192.168.0.16', hostName: 'sfutter' },
  { os: 'linux', ip: '192.168.0.13', hostName: 'sutffater' },
  { os: 'unix', ip: '192.168.0.1', hostName: 'sd' },
  {os: 'oos', ip: '192.168.0.12', hostName: 'fgh'}
])
</script>
<style lang="scss" scoped>
.List{
  background-color: $--tabBarColor;
  border-radius: $--boder-spacing-3 0 0 $--boder-spacing-3;
  padding: $--pagePadding;
  overflow-y: scroll;
  @include scroll-bar-none();
  height: 100%;
}
</style>
