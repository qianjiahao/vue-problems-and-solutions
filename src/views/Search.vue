<template>
  <div class="wrapper">
    <div class="logo"></div>
    <div class="content">
      <div class="bar">
        <input
          class="input"
          type="text"
          name="name"
          v-model="value"
          @keyup.enter="submit"
          @input="filter"
          autocomplete="off"
        >
      </div>
      <i class="iconfont icon-search search" @click="submit"></i>
    </div>
    <div class="option" v-for="option in options" track-by="$index" v-show="!!value" transition="option">
      {{option.title}}
    </div>
  </div>
</template>

<script>
import * as utils from '../utils/utils.js'
import docs from '../config/doc.js'

export default {
  props: ['show-nav'],
  data () {
    return {
      value: '',
      options: []
    }
  },
  methods: {
    filter () {
      this.options = []
      const parts = utils.participle(this.value)
      const weight = utils.countWeight(parts)
      const sort = utils.sortByWeigth(weight, 5)
      sort.map((index) => this.options.push(docs[index]))
    },
    submit () {
      console.log(this.value)
      if (this.value === '/nav') {
        this.showNav = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 90%;
  margin: 0 auto;
  position: relative;;
}

.logo {
  width: 100px;
  height: 100px;
  margin: 20px auto;

  background-image: url(../images/logo.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.content {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  border: 1px solid #ccc;

  &:focus, &:hover {
    border: 1px solid #5dc596;
  }
}

.bar {
  width: calc(100% - 30px);
  position: relative;
}

.input {
  width: 100%;
  font-size: 2rem;
  border: none;
  outline: none;
  padding: 10px 50px 10px 10px;
  position: relative;
  box-sizing: border-box;
  color: #666;
}

.search {
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

.option {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  font-size: 1.5rem;
  border: 1px solid #ccc;
  border-top: 0;
  position: relative;;
  top: 0;
  transition: 0.2s all;
  background-color: white;
  z-index: 10;

  &:hover {
    background-color: #5dc596;
    color: white;
    border: 1px solid #5dc596;
    border-top: 0;
  }
}

.option-leave, .option-enter {
  opacity: 0;
  transform: translateY(10px);
}

.highlight {
  color: red;
}

@media screen and (min-width:960px) {
  .wrapper {
    width: 80%;
  }
}


@media screen and (min-width:1240px) {
  .wrapper {
    width: 50%;
  }
}
</style>
