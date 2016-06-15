<template>
  <div class="data-table">
    <div class="tr" v-for="item in dataList" track-by="$index" v-show="dataList.length">
      <input class="hidden-id" type="text" :id="item.id" :value="shareUrl(item.id)">
      <a class="title" :href="shareUrl(item.id)" target="_blank"><i class="iconfont icon-link"></i>{{item.title}}</a>
      <div>
        <span class="tag" v-for="tag in item.tags">{{tag}}</span>
      </div>

      <div class="operator">
        <i :class="{'iconfont icon-share share': true, 'shared': item.id === shared}" @click="share(item.id)"></i>
        <i :class="{'iconfont fold': true, 'icon-fold': !isOpen(item.id), 'icon-unfold unfolded': isOpen(item.id)}" @click="detail(item.id)"></i>
      </div>
      <div class="content" v-show="isOpen(item.id)">
        {{{item.content | marked | marked-img}}}
      </div>

      <hr />
    </div>
    <div class="page" v-show="data.length">
      <div class="num">{{page + 1}}</div>
      <div class="iconfont icon-pre pre" @click="pre" v-show="page > 0"></div>
      <div class="iconfont icon-next next" @click="next" v-show="(page + 1) * limit < data.length"></div>
    </div>
    <div class="scan" v-show="scan.src" @click="scan.src = ''">
      <img :src="scan.src" alt="" :style="{width: scan.size * 100 + '%'}"/>

      <div class="alter">
        <div class="box iconfont icon-small" @click.stop="alter(0.8)"></div>
        <div class="box iconfont icon-big" @click.stop="alter(1.25)"></div>
      </div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    if (window.hljs) {
      return window.hljs.highlightAuto(code).value
    } else {
      return code
    }
  }
})

export default {
  props: ['data', 'detail', 'open-list'],
  ready () {
    let _this = this
    window.markedImg = function (img) {
      _this.scan.src = img.src
    }
  },
  data () {
    return {
      page: 0,
      limit: 7,
      shared: '',
      scan: {
        src: '',
        size: 1
      }
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
    alter (size) {
      this.scan.size *= size
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
  margin: 10px auto;
  box-sizing: border-box;
  color: #666;
}

.tr {
  position: relative;
  padding: 0 10px 10px 10px;
  box-sizing: border-box;
  transition: 0.2s all;

  &:hover, &:active {
    color: #111;
  }

  hr {
    border: 0;
    border-bottom: 1px solid #eee;
  }
}

.title {
  width: calc(100% - 60px);
  margin-top: -10px;
  margin-left: -5px;
  line-height: 2;
  font-size: 1.8rem;
  color: #666;
  text-decoration: none;

  i {
    transform: rotate(-15deg) translateY(-5px);
    display: inline-block;
    font-size: 1.5rem;
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

.operator {
  overflow: hidden;
  clear: both;
}

.fold {
  float: right;
  margin: 5px 10px;
  font-size: 1.6rem;
  color: #666;
  cursor: pointer;
}

.unfolded {
  color: #0078DB;
}

.share {
  float: right;
  margin: 5px 10px;
  font-size: 1.6rem;
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
  border-radius: 2px;
  padding: 10px;
  overflow-x: auto;
  position: relative;
  z-index: 1;
}

.page {
  overflow: hidden;
  clear: both;
  padding: 0 60px;
  position: relative;
  margin-bottom: 20px;

  .buttom {
    padding: 5px 20px;
    font-size: 30px;
    color: #333;
  }

  .pre {
    @extend .buttom;
    float: left;
  }

  .num {
    position: absolute;
    width: 30px;
    padding: 5px;
    left: calc(50% - 15px);
    top: calc(50% - 14px);
    text-align: center;
    font-size: 1.4rem;
    border: 1px solid #eee;
  }
  .next {
    @extend .buttom;
    float: right;
  }
}

.scan {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1999;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: auto;

  img {
    display: block;
    margin: 0 auto;
  }

  .alter {
    width: 200px;
    position: fixed;
    left: calc(50% - 100px);
    bottom: 50px;
    overflow: hidden;
    background: white;

    .box {
      width: 50%;
      border-left: 1px solid #eee;
      box-sizing: border-box;
      float: left;
      text-align: center;
      padding: 20px;
      font-size: 24px;
    }
  }
}
</style>
