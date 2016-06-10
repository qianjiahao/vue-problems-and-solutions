<template>
  <div class="wrapper">
    <div class="logo"></div>
    <header class="header">
      <search-bar :value.sync="value" :change="filter" :submit="submit" :focus="focus" :blur="blur"></search-bar>
      <predictor :show="predictorShow" :data="predictor.slice(0, 5)"></predictor>
    </header>
    <data-table :data="result"></data-table>
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'
import Predictor from '../components/Predictor.vue'
import DataTable from '../components/DataTable.vue'
import * as utils from '../utils/utils.js'

export default {
  props: ['show-nav'],
  data () {
    return {
      value: '',
      predictor: [],
      predictorShow: false,
      result: []
    }
  },
  methods: {
    focus () {
      this.predictorShow = true
    },
    blur () {
      this.predictorShow = false
    },
    filter () {
      this.predictor = []
      const parts = utils.participle(this.value)
      const weight = utils.countWeight(parts)
      const sort = utils.sortByWeigth(weight)
      this.predictor = sort
    },
    submit () {
      if (this.value === '/nav') {
        this.showNav = true
      } else {
        this.result = this.predictor
        this.predictorShow = false
      }
    }
  },
  components: {
    SearchBar,
    Predictor,
    DataTable
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
