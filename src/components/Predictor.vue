<template>
  <div class="predictor">
    <div
      class="item"
      v-for="item in data"
      track-by="$index"
      v-show="!!show"
      transition="item"
      v-text="item.title">
    </div>
  </div>
</template>

<script>
export default {
  props: ['data', 'show']
}
</script>

<style lang="scss" scoped>
.predictor {
  width: 100%;
  padding: 0px;
  box-sizing: border-box;
  position: absolute;;
  top: 45px;
  z-index: 10;
}
.item {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  font-size: 1.5rem;
  border: 1px solid #ccc;
  border-top: 0;
  transition: 0.2s all;
  background-color: white;

  &:hover {
    background-color: #5dc596;
    color: white;
    border: 1px solid #5dc596;
    border-top: 0;
  }
}

.item-leave, .item-enter {
  opacity: 0;
  transform: translateY(10px);
}
</style>
