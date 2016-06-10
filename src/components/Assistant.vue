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
  bottom: 20px;
  z-index: 998;
  width: 40px;
  height: 40px;
  font-size: 40px;
  color: #333;
}
</style>
