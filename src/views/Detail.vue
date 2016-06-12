<template>
  <div class="">
    <div class="wrapper">
      <div v-if="!error">
        <data-table :data="result" :detail="detail" :open-list="openList"></data-table>
      </div>
    </div>
    <div class="error" v-if="error">
      <i class="iconfont icon-404"></i>此路不通
    </div>
  </div>
</template>

<script>
import doc from '../config/doc.js'
import DataTable from '../components/DataTable.vue'

export default {
  ready () {
    try {
      let paramsId = this.$route.params.id

      if (paramsId) {
        const temp = doc.filter((v, k) => v.id === paramsId)

        if (temp && temp.length) {
          this.result = temp
        } else {
          this.error = true
        }
      } else {
        this.error = true
      }
    } catch (e) {
      this.error = true
    }
  },
  data () {
    return {
      index: 0,
      result: [],
      openList: [this.$route.params.id],
      error: false
    }
  },
  methods: {
    detail (id) {
      let index = this.openList.indexOf(id)
      if (index > -1) {
        this.openList.$remove(id)
      } else {
        this.openList.push(id)
      }
    }
  },
  components: {
    DataTable
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 0 auto;
  position: relative;
  padding: 10px;
}

.error {
  text-align: center;
  height: 34px;
  font-size: 27px;
  position: absolute;
  top: calc(40% - 17px);
  left: calc(50% - 67px);
  color: #999;
}

@media screen and (min-width:960px) {
  .wrapper {width: 100%;}
}

@media screen and (min-width:1024px) {
  .wrapper {width: 60%;}
}
</style>
