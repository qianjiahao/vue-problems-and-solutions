<template>
  <div class="data-table">
    <div class="tr" v-for="item in dataList" track-by="$index" v-show="dataList.length" transition="pop" >
      <div class="title">{{item.title}}</div>
      <div>
        <span class="tag" v-for="tag in item.tags">{{tag}}</span>
      </div>
      <i :class="{'iconfont': true, 'fold': true, 'icon-fold': index !== $index, 'icon-unfold': index === $index}" @click="detail($index)"></i>
      <div class="content" v-show="index === $index" v-html="item.content | marked | marked-img"></div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  props: ['data'],
  data () {
    return {
      index: -1,
      page: 0,
      limit: 10
    }
  },
  methods: {
    detail ($index) {
      if ($index === this.index) {
        this.index = -1
      } else {
        this.index = $index
      }
    }
  },
  filters: {
    marked: marked
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
  margin: 0px auto;
  box-sizing: border-box;
  color: #666;
}

.tr {
  position: relative;
  box-sizing: border-box;
  padding: 10px;
  border-bottom: 1px solid #eee;
  transition: 0.2s all;

  &:hover, &:active {
    border-bottom: 1px solid #eee;
    color: #222;
  }
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

.fold {
  position: absolute;
  left: calc(50% - 35px);
  top: 63px;
  font-size: 20px;
  padding: 10px 30px;
  color: #0078DB;
}
.content {
  margin: 10px -10px 0 -10px;
  transition: 0.2s all;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 10px;
}

.pop-leave, .pop-enter {
  opacity: 0;
  transform: scale(0.98);
}
</style>
