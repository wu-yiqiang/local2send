<template>
  <section class="Input">
   <div class="tool-bar">
    <div class="svg-box">
      <SvgIcon name="voice" size="50" />
    </div>
    <div class="svg-box">
      <SvgIcon name="fold" size="50" />
    </div>
    <div class="svg-box">
      <SvgIcon name="file" size="50" />
    </div>
    <div class="svg-box">
      <SvgIcon name="record" size="50" />
    </div>
    <div class="svg-box" @click="transmit">
      <SvgIcon name="transmit" size="50" />
    </div>
   </div>
   <textarea class="input-bar" placeholder="请输入..." v-model="inputVal" />
  </section>
</template>
<script setup>
import { reactive, watch, computed, ref, onMounted } from 'vue'
import SvgIcon from "../../components/SvgIcon/index.vue";
import mitter from '@/utils/eventBus';
let inputVal = ref('')
const transmit = () => {
  if (!inputVal.value.length) return
  let data = {
    hostName: 'massc', ip: '127.0.0.1', img: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg', time: new Date().getTime(), content: inputVal.value
  }
  mitter.emit('transmit', data)
  inputVal.value = ''
}

function watchKeyEvent() {
  document.addEventListener("keydown", (event) => {
    if (event.keyCode === 16) {
      transmit()
    }
  })
}

onMounted(() => {
  watchKeyEvent()
})
</script>
<style lang="scss" scoped>
.Input{
  .tool-bar {
    height: 30%;
    width: 100%;
    font-size: 16px;
    @include box-align-center();
    margin-bottom: 7px;
    .svg-box {
      margin-right: 10px;
      cursor: pointer;
      border-radius: 3px;
      @include box-align-center();
    }
  }
  .input-bar {
    width: 100%;
    height: 70%;
    overflow-y: scroll;
    @include scroll-bar-none();
    outline: none;
    font-size: 14px;
    line-height: 1;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 5px;
    background-color: $--tabBarColor;
    color: #fff;
  }
}
</style>
