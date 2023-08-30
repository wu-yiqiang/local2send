<template>
  <section class="Input">
   <div class="tool-bar">
    <SvgIcon name="voice" size="50" />
    <SvgIcon name="voice" size="50" />
    <SvgIcon name="voice" size="50" />
    <SvgIcon name="voice" size="50" />
    <SvgIcon name="voice" size="50" />
   </div>
   <div class="input-bar" placeholder="请输入..." contenteditable></div>
  </section>
</template>
<script setup>
import { reactive, watch, computed, ref } from 'vue'
import SvgIcon from "../../components/SvgIcon/index.vue";
</script>
<style lang="scss" scoped>
.Input{
  .tool-bar {
    height: 30%;
    width: 100%;
    font-size: 16px;
    @include box-align-center();
    svg {
      margin-right: 10px;
      cursor: pointer;
    }
  }
  .input-bar {
    width: 100%;
    height: 70%;
    overflow-y: scroll;
    outline: none;
    font-size: 14px;
    line-height: 1;
    &:empty::before {
      content: attr(placeholder);
      color: #8b8888;
    }
  }
}
</style>
