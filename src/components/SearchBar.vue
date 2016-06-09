<template>
  <div class="search-bar">
    <input
      class="input"
      type="text"
      name="name"
      v-model="value"
      @keyup.enter="submit"
      @input="change"
      autocomplete="off">
    <i class="iconfont icon-search button" @click="submit"></i>
  </div>
</template>

<script>
export default {
  props: ['value', 'submit', 'change']
}
</script>

<style lang="scss" scoped>
.search-bar {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  border: 1px solid #ccc;

  &:focus, &:hover {
    border: 1px solid #5dc596;
  }
}

.input {
  width: 100%;
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
  right: 0px;
  top: 0px;
  bottom: 0px;
  color: white;
  cursor: pointer;
  background-color: #5dc596;
}
</style>
