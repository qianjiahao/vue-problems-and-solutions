<template>
  <div class="assistant iconfont icon-more" @click="click"></div>
</template>

<script>
export default {
  props: ['click']
}
</script>

<style lange="scss" scoped>
.assistant {
  position: fixed;
  right: 10px;
  padding: 0 10px;
  bottom: 10px;
  width: 35px;
  z-index: 998;
  font-size: 35px;
  color: #333;
}
</style>
