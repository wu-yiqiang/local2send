<template>
  <section class="Item">
    <div class="info">
      <SvgIcon
          :name="imgName"
          size="50"
        />
        &nbsp;&nbsp;
        <div class="hostname">{{ item.hostName }}</div>
        &nbsp;&nbsp;
        <div class="ip">({{item.ip}})</div>
    </div>
  </section>
</template>
<script setup>
import { reactive, watch, computed, ref, onMounted } from 'vue'
import SvgIcon from "../../components/SvgIcon/index.vue";
let imgName = ref('mac')
const props = defineProps({
  item: {
    require: true,
    type: Object,
    default: {},
  }
})
function initOs() {
  if (props.item.os === 'mac') return imgName.value = 'mac' 
  if (props.item.os === 'linux') return imgName.value = 'linux' 
  if (props.item.os === 'windows') return imgName.value = 'windows' 
  if (props.item.os === 'unix') return imgName.value = 'unix' 
  return imgName.value = 'oos' 
}
onMounted(() => {
  initOs()
})
</script>
<style lang="scss" scoped>
.Item{
  border: 1px solid gray;
  border-radius: $--boder-spacing-3;
  padding: $--padding-spacing-5;
  margin: $--padding-spacing-5;
  cursor: pointer;
  .info {
    display: flex;
    align-items: center;
    .hostname {
      font-size: 16px;
    }
    .ip {
      font-size: 14px;
    }
  }
}
</style>
