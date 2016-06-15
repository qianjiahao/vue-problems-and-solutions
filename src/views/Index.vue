<template>
  <div class="wrapper">
    <div class="logo"></div>
    <header class="header">
      <search
        :value.sync="value"
        :change="filter"
        :submit="submit"
        :focus="show"
        :click="show"
        :clear="clear"
        :up="move.bind(this, -1)"
        :down="move.bind(this, 1)"
        :index="index"
        :show="hint"
        :data="data.slice(0, 5)"
        :choose="choose">
      </search>
    </header>
    <data-table
      :data="result"
      :detail="detail"
      :open-list="openList">
    </data-table>
    <div class="footer"></div>
  </div>
</template>

<script>
import Search from 'components/Search.vue'
import DataTable from 'components/DataTable.vue'
import * as utils from 'utils/utils.js'

export default {
  props: ['show-nav'],
  data () {
    return {
      index: -1,
      value: '',
      hint: false,
      data: [],
      result: [],
      openList: []
    }
  },
  methods: {
    show () {
      this.index = -1
      this.hint = true
    },
    hide () {
      this.index = -1
      this.hint = false
    },
    clear () {
      this.value = ''
      this.hide()
    },
    choose (item) {
      this.result = [item]
      this.openList = [item.id]
      this.hide()
    },
    move (flag) {
      if (flag < 0) {
        this.index = this.index <= 0 ? -1 : --this.index
      } else {
        this.index = this.index >= 4 ? 5 : ++this.index
      }
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
      this.show()
      this.data = []
      const parts = utils.participle(this.value)
      const weight = utils.countWeight(parts)
      const sort = utils.sortByWeigth(weight)
      this.data = sort
    },
    submit () {
      if (this.index > -1 && this.index < 5) {
        this.choose(this.data[this.index])
        this.openList = [this.data[this.index].id]
      } else {
        this.result = this.data
        this.openList = []
      }
      this.hide()
    }
  },
  components: {
    Search,
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
