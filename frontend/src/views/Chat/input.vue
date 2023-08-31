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
    margin-bottom: 7px;
    .svg-box {
      margin-right: 10px;
      // border: 1px solid gray;
      cursor: pointer;
      border-radius: 3px;
      @include box-align-center();
    }
  }
  .input-bar {
    width: 100%;
    height: 70%;
    overflow-y: scroll;
    outline: none;
    font-size: 14px;
    line-height: 1;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 10px;
    &:empty::before {
      content: attr(placeholder);
      color: #8b8888;
    }
  }
}
</style>
