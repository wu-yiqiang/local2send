<template>
  <section class="Dialog">
    <div v-for="(item, index) in lists" :key="index" class="item">
      <div v-if="item.ip === store.$state.settings.ip" class="left-box">
        <DialogRight :target="item"/>
      </div>
      <div v-else class="right-box">
        <DialogLeft :target="item"/>
      </div>
    </div>
  </section>
</template>
<script setup>
import { reactive, watch, computed, ref, onMounted } from 'vue'
import DialogLeft from './dialog-left.vue'
import DialogRight from './dialog-right.vue'
import mitter from '@/utils/eventBus';
import { States } from "@/store/index"
const store = States()
let lists = reactive([])
onMounted(() => {
  lists.push(...[
  {
    hostName: 'mac', ip: '192.168.0.12', img: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg', time: 12232334, content: 'sa阿啊都asd阿萨asda啊阿萨德大萨达萨达萨达萨达萨达阿达萨达萨达萨达达萨达萨达是的dasd dasd阿迪啊大大的点点滴滴点点滴滴点点滴滴点点滴滴的等待的点点滴滴点点滴滴点点滴滴点点滴滴点点滴滴的等待'
  },
  {
    hostName: 'haha', ip: '192.168.0.13', img: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg', time: 2912232334, content: 's事实sd阿萨达撒啊dasd阿萨达达阿萨达撒啊三分大赛分沙发沙发萨法萨达萨阿萨达德上高速的损公肥私第三方公司上ad'
  },
  {
    hostName: 'kk', ip: '127.0.0.1', img: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg', time: 1220932334, content: 'sad收拾收拾'
  },
  {
    hostName: 'rr', ip: '127.0.0.1', img: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg', time: 1289232334, content: 'sadaaaaa'
  },
  {
    hostName: 'mac', ip: '192.168.0.11', img: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg', time: 1223239034, content: 'sadllll'
  },
  {
    hostName: 'mac', ip: '192.168.0.2', img: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg', time: 1223234534, content: 'saduussuu'
  },
  ].sort((a, b) => a - b))
  mitter.on('transmit', (data) => {
    lists.push(data)
    const ele = document.querySelector('.Dialog')
    console.log('end', ele)
    ele.scrollIntoView({ behavior: "smooth", block: "end" });
  })
})
</script>
<style lang="scss" scoped>
.Dialog{
  border-bottom: 1px solid gray;
  overflow: hidden;
  .item {
    width: 100%;
    .left-box {
      display: flex;
      justify-content: flex-end;
    }
    .right-box, .left-box {
      margin: 15px 0;
      max-width: 100%;
    }
  }
}
</style>
