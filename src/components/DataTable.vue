<template>
  <div class="data-table">
    <div class="tr" v-for="item in dataList" track-by="$index" v-show="dataList.length">
      <input class="hidden-id" type="text" :id="item.id" :value="shareUrl(item.id)">
      <a class="title" :href="shareUrl(item.id)"><i class="iconfont icon-link"></i>{{item.title}}</a>
      <div>
        <span class="tag" v-for="tag in item.tags">{{tag}}</span>
      </div>
      <i :class="{'iconfont fold': true, 'icon-fold': !isOpen(item.id), 'icon-unfold': isOpen(item.id)}" @click="detail(item.id)"></i>
      <i :class="{'iconfont icon-share share': true, 'shared': item.id === shared}" @click="share(item.id)"></i>

      <div class="content" v-show="isOpen(item.id)">
        {{{item.content | marked | marked-img}}}
      </div>
    </div>
    <div class="page" v-show="data.length">
      <div class="iconfont icon-pre pre" @click="pre" v-show="page > 0"></div>
      <div class="iconfont icon-next next" @click="next" v-show="(page + 1) * limit < data.length"></div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  props: ['data', 'detail', 'open-list'],
  data () {
    return {
      page: 0,
      limit: 7,
      shared: ''
    }
  },
  methods: {
    isOpen (id) {
      return this.openList.indexOf(id) > -1
    },
    share (id) {
      document.getElementById(id).select()
      document.execCommand('Copy')
      this.shared = id
    },
    shareUrl (id) {
      let url = 'http://qianjiahao.github.io/vue-problems-and-solutions/#!/detail/'
      return url + id
    },
    pre () {
      this.page -= 1
    },
    next () {
      this.page += 1
    }
  },
  filters: {
    marked: marked
  },
  computed: {
    dataList () {
      let min = this.page * this.limit
      let max = (this.page + 1) * this.limit
      return this.data.filter((v, k) => min <= k && k < max)
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
  padding: 10px;
  box-sizing: border-box;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  transition: 0.2s all;

  &:hover, &:active {
    border-bottom: 1px solid #bbb;
    color: #111;
  }
}

.title {
  width: calc(100% - 60px);
  margin-top: -10px;
  margin-left: -5px;
  line-height: 2;
  font-size: 2rem;
  color: #666;
  text-decoration: none;

  i {
    transform: rotate(-15deg) translateY(-5px);
    display: inline-block;
    font-size: 1.7rem;
    color: #f49484;
  }
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
  top: 46px;
  font-size: 20px;
  padding: 10px 30px;
  color: #0078DB;
}

.share {
  font-size: 20px;
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 10px;
  color: #666;
  cursor: pointer;
}

.shared {
  color: #FF6A6A;
}

.hidden-id {
  width: 0.1px;
  height: 0.1px;
  border: none;
  outline: none;
  opacity: 0.1;
}

.content {
  margin: 10px auto;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 10px;
  overflow-x: auto;
  position: relative;
  z-index: 1;
}

.page {
  overflow: hidden;
  clear: both;
  padding: 20px 30px;

  .pre {
    font-size: 30px;
    float: left;
    margin-left: 40px;
  }

  .next {
    font-size: 30px;
    float: right;
    margin-right: 40px;
  }
}
</style>
