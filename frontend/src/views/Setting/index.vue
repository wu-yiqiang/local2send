<template>
  <section class="setting">
    <h1 class="title-box">设置</h1>
    <div class="setting-box">
      <!-- 通用 -->
      <div class="general-box">
        <div class="general-title">通用</div>
        <div class="general-box-item">
          <div class="item-title">主题</div>
        </div>
        <!-- <div class="general-box-item">
          <div class="item-title">语言</div>
        </div> -->
        <!-- <div class="general-box-item">
          <div class="item-title">最小化到托盘</div>
          <eleInput value="YES" />
        </div> -->
      </div>
      <!-- 接收 -->
      <div class="recevice-box">
        <div class="recevice-title">接收</div>
        <div class="recevice-box-item">
          <div class="item-title">保存目录</div>
          <Input :value="settingFrom.saveDir" />
        </div>
      </div>
      <!-- 网络 -->
      <div class="network-box">
        <div class="network-title">网络</div>
        <div class="network-box-item">
          <div class="item-title">主机名</div>
          <Input :value="settingFrom.hostName" />
        </div>
        <div class="network-box-item">
          <div class="item-title">IP</div>
          <Input :value="settingFrom.ip" />
        </div>
        <div class="network-box-item">
          <div class="item-title">端口</div>
          <Input :value="settingFrom.port" />
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import Input from '@/components/Input/index.vue'
import { States } from "@/store/index"
import { storeToRefs } from "pinia"
const store = States()
let settingFrom = reactive<Object>({
  saveDir: '',
  hostName: '',
  ip: '',
  port: 0,
})
onMounted(() => {
  const { settings } = storeToRefs(store)
  console.log('setting', settings)
  settingFrom.ip = settings.value.ip
  settingFrom.saveDir = settings.value.saveDir
  settingFrom.hostName = settings.value.hostName
  settingFrom.port = settings.value.port
})
</script>

<style lang="scss" scoped>
$--mainBoxBackgroundColor: rgb(48,54,53);
.setting {
  color: $--text-color;
  @include box-center();
  height: 100%;
  .title-box {
    margin-bottom: 10px;
    font-size: $--fontSizeTitle16;
  }
  .setting-box {
    width: 100%;
    overflow: scroll;
    @include scroll-bar-none();
    .general-box,
    .recevice-box,
    .network-box {
      width: 100%;
      color: rgb(244, 244, 244);
      padding: 10px;
      border-radius: 10px;
      background-color: $--mainBoxBackgroundColor;
      margin-bottom: 20px;
      .general-title,
      .recevice-title,
      .network-title {
        font-size: $--fontSizeTitle16;
      }
      .general-box-item,
      .recevice-box-item,
      .network-box-item {
        font-size: $--fontSizeText14;
        display: flex;
        justify-content: space-between;
        height: 40px;
        margin: 10px 0;
        .item-title {
          @include box-center();
        }
      }
      .network-box-item  {
        margin-top: 0;
      }
    }
  }
}
</style>
