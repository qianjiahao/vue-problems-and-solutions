<template>
  <div class="data-table">
    <div class="tr" v-for="item in dataList" track-by="$index" v-show="dataList.length" transition="pop">
      <div class="title">{{item.title}}</div>
      <div>
        <span class="tag" v-for="tag in item.tags">{{tag}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data () {
    return {
      page: 0,
      limit: 10
    }
  },
  computed: {
    dataList () {
      return this.data.filter((v, k) => (this.page * this.limit) <= k && k < ((this.page + 1) * this.limit))
    }
  }
}
</script>

<style lang="scss" scoped>
table, tbody, tr {
  width: 100%;
  display: block;
}

.data-table {
  margin: 10px auto;
  box-sizing: border-box;
  color: #666;
}

.tr {
  box-sizing: border-box;
  padding: 10px;
  border-bottom: 1px solid #eee;
  transition: 0.2s all;

  &:hover, &:active {
    border-bottom: 1px solid #999;
    color: #222;
  }
}

.empty {
  transition: 0.2s all;
  text-align: center;
  padding: 30px;
}

.pop-leave, .pop-enter {
  opacity: 0;
  transform: scale(0.98);
}

.title {
  width: 100%;
  line-height: 2;
  font-size: 2rem;
}

.tag {
  display: inline-block;
  padding: 5px;
  background-color: #f49484;
  color: white;
  border-radius: 5px;
  margin-right: 10px;
  font-weight: 500;
}


</style>
