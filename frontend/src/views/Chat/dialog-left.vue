<template>
  <section class="DialogLeft">
    <div class="avator">
      <img :src="props.target.img" alt="" />
    </div>
    <div class="main-box">
      <div class="content">{{ props.target.content }}</div>
      <div class="time">{{ formatDate(props.target.time) }}</div>
      <div class="triangle"></div>
    </div>
    <!-- <div class="name">{{ props.target.hostName }}</div> -->
  </section>
</template>
<script setup>
import { reactive, watch, computed, ref, onMounted } from "vue";
const formatDate = (timestamp) => {
  var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1):date.getMonth()+1) + '-';
        var D = (date.getDate()< 10 ? '0'+date.getDate():date.getDate())+ ' ';
        var h = (date.getHours() < 10 ? '0'+date.getHours():date.getHours())+ ':';
        var m = (date.getMinutes() < 10 ? '0'+date.getMinutes():date.getMinutes()) + ':';
        var s = date.getSeconds() < 10 ? '0'+date.getSeconds():date.getSeconds();
        return Y+M+D+h+m+s;
}
const props = defineProps({
  target: {
    require: true,
    type: Object,
    default: () => {},
  },
});
</script>
<style lang="scss" scoped>
.DialogLeft {
  display: flex;
  .avator {
    margin-right: 6px;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }
  .main-box {
    display: flex;
    position: relative;
    .content {
      background-color: #1aad19;
      border-radius: 4px;
      margin-left: 10px;
      padding: 5px;
      word-break: break-all;
      font-size: 16px;
      color: #fff;
    }
    .time {
      margin-left: 10px;
      font-size: 14px;
      color: #949393;
    }
    .triangle {
      position: absolute;
      top: 4px;
      border-top: 10px solid transparent;
      border-right: 10px solid #1aad19;
      border-bottom: 10px solid transparent;
    }
  }
}
</style>
