<template>
  <input class="input-box" type="text" :value="value" />
</template>
<script setup>
defineProps({
  value: {
    type: [String, Number],
    required: true,
    default: ''
  },
})
</script>
<style lang="scss" scoped>
.input-box{
  color: #fff;
  font-size: $--fontSizeText14;
  background-color: $--input-background-color;
  border-radius: 5px;
  border: none;
  padding: 5px;
  text-align: center;
  outline: none;
}
</style>
