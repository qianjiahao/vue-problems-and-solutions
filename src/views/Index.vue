<template>
  <div class="wrapper">
    <div class="logo"></div>
    <header class="header">
      <search-bar :value.sync="value" :change="filter" :submit="submit"></search-bar>
      <predictor :show="value" :data="predictor"></predictor>
    </header>
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'
import Predictor from '../components/Predictor.vue'
import * as utils from '../utils/utils.js'
import docs from '../config/doc.js'

export default {
  props: ['show-nav'],
  data () {
    return {
      value: '',
      predictor: []
    }
  },
  methods: {
    filter () {
      this.predictor = []
      const parts = utils.participle(this.value)
      const weight = utils.countWeight(parts)
      const sort = utils.sortByWeigth(weight, 5)
      sort.map((index) => this.predictor.push(docs[index]))
    },
    submit () {
      if (this.value === '/nav') {
        this.showNav = true
      }
    }
  },
  components: {
    SearchBar,
    Predictor
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 0 auto;
  position: relative;
}

.header {
  position: relative;
}

@media screen and (min-width:960px) {
  .wrapper {width: 100%;}
  .logo {display: none;}
}

@media screen and (min-width:1024px) {
  .wrapper {width: 60%;}

  .logo {
    width: 100px;
    height: 100px;
    margin: 20px auto;
    display: block;
    background-image: url(../images/logo.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
}

</style>
