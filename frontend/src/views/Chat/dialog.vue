<template>
  <section class="Dialog">
    <div v-for="(item, index) in lists" :key="index" class="item">
      <div v-if="item.ip === store.$state.settings.ip" class="left-box">
        <DialogFrameWork :target="item"/>
      </div>
      <div v-else class="right-box">
        <DialogFrameWork :target="item"/>
      </div>
    </div>
  </section>
</template>
<script setup>
import { reactive, watch, computed, ref, onMounted } from 'vue'
import DialogFrameWork from './dialog-framework.vue'
import { States } from "@/store/index"
const store = States()
let lists = reactive([])
onMounted(() => {
  lists = [
  {
    hostName: 'mac', ip: '192.168.0.12', img: '../../assets/icon/mac', time: 1112232334, content: 'sa阿啊都是的d'
  },
  {
    hostName: 'haha', ip: '192.168.0.13', img: '../../assets/icon/mac', time: 112912232334, content: 's事实上ad'
  },
  {
    hostName: 'kk', ip: '127.0.0.1', img: '../../assets/icon/mac', time: 111220932334, content: 'sad收拾收拾'
  },
  {
    hostName: 'rr', ip: '127.0.0.1', img: '../../assets/icon/mac', time: 111289232334, content: 'sadaaaaa'
  },
  {
    hostName: 'mac', ip: '192.168.0.11', img: '../../assets/icon/mac', time: 111223239034, content: 'sadllll'
  },
  {
    hostName: 'mac', ip: '192.168.0.2', img: '../../assets/icon/mac', time: 111223234534, content: 'saduussuu'
  },
  ].sort((a, b) => a - b)
})
</script>
<style lang="scss" scoped>
.Dialog{
  border-bottom: 1px solid gray;
  overflow: hidden;
  .item {
     .left-box {
      display: block;
      float: left;
    }
    .right-box {
      display: block;
      float: right;
    }
  }
}
</style>
