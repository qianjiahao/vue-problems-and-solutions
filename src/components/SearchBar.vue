<template>
  <div class="search-bar">
    <input
      class="input"
      type="text"
      name="name"
      v-model="value"
      @keyup.enter="submit"
      @input="change"
      @focus="focus"
      @blur="blur"
      autocomplete="off">
    <i class="iconfont icon-search button" @click="submit"></i>
  </div>
</template>

<script>
export default {
  props: ['value', 'submit', 'change', 'focus', 'blur']
}
</script>

<style lang="scss" scoped>
.search-bar {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  border: 1px solid #ccc;

  &:active, &:hover {
    border: 1px solid #5dc596;
  }
}

.input {
  width: 100%;
  height: 43px;
  font-size: 2rem;
  border: none;
  outline: none;
  padding: 10px;
  padding-right: 80px;
  position: relative;
  box-sizing: border-box;
  color: #666;
}

.button {
  font-size: 3rem;
  display: inline-block;
  position: absolute;
  padding: 4px 15px;
  right: -1px;
  top: -1px;
  bottom: -1px;
  color: white;
  cursor: pointer;
  background-color: #5dc596;
}
</style>
