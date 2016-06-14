<template>
  <div class="wrapper" @click.stop="hidePredictor">
    <div class="logo"></div>
    <header class="header">
      <search-bar :value.sync="value" :change="filter" :submit="submit" :focus="showPredictor" :click="showPredictor"></search-bar>
      <predictor :show="predictorShow" :data="data.slice(0, 5)" :click="choose"></predictor>
    </header>
    <data-table :data="result" :detail="detail" :open-list="openList"></data-table>
    <div class="footer">

    </div>
  </div>
</template>

<script>
import SearchBar from 'components/SearchBar.vue'
import Predictor from 'components/Predictor.vue'
import DataTable from 'components/DataTable.vue'
import * as utils from 'utils/utils.js'

export default {
  props: ['show-nav'],
  data () {
    return {
      value: '',
      data: [],
      predictorShow: false,
      result: [],
      openList: []
    }
  },
  methods: {
    showPredictor () {
      this.predictorShow = true
    },
    hidePredictor () {
      this.predictorShow = false
    },
    choose (item) {
      this.result = [item]
      this.openList = [item.id]
      this.showPredictor()
    },
    detail (id) {
      let index = this.openList.indexOf(id)
      if (index > -1) {
        this.openList.$remove(id)
      } else {
        this.openList.push(id)
      }
    },
    filter () {
      this.showPredictor()
      this.data = []
      const parts = utils.participle(this.value)
      const weight = utils.countWeight(parts)
      const sort = utils.sortByWeigth(weight)
      this.data = sort
    },
    submit () {
      this.result = this.data
      this.openList = []
      this.hidePredictor()
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

.footer {
  padding: 30px;
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
