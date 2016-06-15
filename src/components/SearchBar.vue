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
      @click.stop="click"
      @keydown.up="up"
      @keydown.down="down"
      autocomplete="off">
    <i :class="{'iconfont icon-clear clear': true, 'clear-active': !!value.length}" @click="clear"></i>
    <i class="iconfont icon-search search" @click="submit"></i>
  </div>
</template>

<script>
export default {
  props: ['value', 'submit', 'change', 'focus', 'click', 'clear', 'up', 'down']
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

.clear {
  font-size: 2.6rem;
  position: absolute;
  right: 70px;
  top: 8px;
  color: #eee;
}

.clear-active {
  color: #666;
}

.search {
  font-size: 3rem;
  display: inline-block;
  position: absolute;
  padding: 6px 15px;
  right: -1px;
  top: -1px;
  bottom: -1px;
  color: white;
  cursor: pointer;
  background-color: #5dc596;
}
</style>
