<template>
  <div class="container">
    <div class="search">
      <input
        class="input"
        type="text"
        v-model="value"
        autocomplete="off"
        @focus="focus"
        @input="change"
        @click.stop="click"
        @keydown.up="up"
        @keydown.down="down"
        @keyup.enter="submit">
      <i :class="{'iconfont icon-clear clear': true, 'clear-active': !!value.length}" @click="clear"></i>
      <i class="iconfont icon-search submit" @click="submit"></i>
    </div>
    <div class="predictor">
      <div
        :class="{'item': true, 'item-active': index === $index}"
        v-for="item in data"
        track-by="$index"
        v-show="!!show"
        transition="item"
        @click="choose(item)"
        v-text="item.title">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: { defalut: '' },
    data: { defalut: [] },
    index: { defalut: -1 },
    show: { defalut: false },
    change: Function,
    focus: Function,
    click: Function,
    clear: Function,
    up: Function,
    down: Function,
    choose: Function,
    submit: Function
  }
}
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  border: 1px solid #ccc;

  &:active, &:hover {
    border: 1px solid #5dc596;
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

  .submit {
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
}


.predictor {
  width: 100%;
  padding: 0px;
  box-sizing: border-box;
  position: absolute;;
  top: 45px;
  z-index: 10;

  .item {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    font-size: 1.5rem;
    border: 1px solid #ccc;
    border-top: 0;
    transition: 0.2s all;
    background-color: white;
    color: #666;

    &:hover {
      background-color: #5dc596;
      color: white;
      border: 1px solid #5dc596;
      border-top: 0;
    }
  }

  .item-active {
    background-color: #5dc596;
    color: white;
    border: 1px solid #5dc596;
    border-top: 0;
  }

  .item-leave, .item-enter {
    opacity: 0;
    transform: translateY(10px);
  }
}

</style>
