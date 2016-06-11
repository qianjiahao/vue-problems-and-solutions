<template>
  <div class="dev">
    <div class="title">
      Pull Your Problems and Solutions
    </div>

    <div class="wrapper">
      <div class="doc-id">
        ID:<span>{{id}}</span>
      </div>

      标题
      <input class="doc-title" type="text" v-model="title">

      标签
      <div class="doc-tags">
        <span :class="{'doc-tag': true, 'doc-tag-checked': checkedTag.indexOf(tag) > -1}" v-for="tag in tags" @click="checkbox(tag)">{{ tag }}</span>
      </div>

      内容
      <div class="doc-content">
        <textarea class="box" v-model="content" v-show="!marked"></textarea>
        <div class="box" v-html="content | marked | marked-img" v-show="marked"></div>
        <i :class="{'iconfont': true, 'eye': true, 'icon-unmarked': !marked, 'icon-marked': marked}" @click="toMarked"></i>
      </div>

      代码
      <div class="doc-content" @mouseover.stop="hover(true)" @mouseleave.stop="hover(false)">
        <textarea id="result" class="box" readOnly="true" :value="result"></textarea>
        <div class="can-copy" v-show="isHover" @click="copy">
          <i :class="{'iconfont': true, 'icon-copy-start': !isCopy, 'icon-copy-done': isCopy}"></i>
          <div>{{isCopy ? '复制成功' : '复制'}}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import marked from 'marked'
import tags from '../config/tag.js'
import uuid from 'uuid'

export default {
  data () {
    return {
      id: uuid.v4(),
      title: '',
      tags: tags,
      checkedTag: [],
      marked: false,
      content: '',
      isHover: false,
      isCopy: false
    }
  },
  computed: {
    result () {
      let id = this.id
      let title = this.title
      let tags = this.checkedTag.length ? `tag['${this.checkedTag.join('\'], tag[\'')}']` : ''
      let content = this.content.toString()

      const result = `{
    id: '${id}',
    title: '${title}',
    tags: [${tags}],
    content: \`${content}\`
  }`
      return result
    }
  },
  methods: {
    toMarked () {
      this.marked = !this.marked
    },
    checkbox (tag) {
      let index = this.checkedTag.indexOf(tag)
      if (index > -1) {
        this.checkedTag.splice(index, 1)
      } else {
        this.checkedTag.push(tag)
      }
    },
    hover (hover) {
      if (!hover) {
        this.isCopy = false
      }
      this.isHover = hover
    },
    copy (e) {
      document.getElementById('result').select()
      document.execCommand('Copy')
      this.isCopy = true
    }
  },
  filters: {
    marked: marked
  }
}

</script>

<style lang="scss" scoped>
.dev {

}

.title {
  padding: 30px;
  text-align: center;
  font-size: 2rem;
}

.wrapper {
  position: relative;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 10px;
}

.line {
  width: calc(100%);
  display: block;
  box-sizing: border-box;
  margin: 20px auto;
  font-size: 1.4rem;
}

.box {
  @extend .line;
  position: relative;
  padding: 20px;
  height: 300px;
  outline: none;
  border: 1px solid #eee;
  border-radius: 10px;
  overflow: auto;
}

.eye {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 30px;
}

.doc-id {
  @extend .line;
  color: #666;

  span {
    color: #999;
    margin-left: 10px;
  }
}
.doc-title {
  @extend .line;
  padding: 10px;
  color: #666;
  outline: none;
  border: 1px solid #eee;
}

.doc-tags {
  @extend .line;
  overflow: hidden;
}

.doc-tag {
  float: left;
  margin: 5px;
  border: 1px solid #f49484;
  color: #f49484;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
}

.doc-tag-checked {
  background-color: #f49484;
  color: white;
}

.doc-content {
  @extend .line;
  position: relative;
}

.copy {
  text-align: center;
  padding: 10px;
  width: 100px;
  margin: 0 auto;

  &:hover {
    background-color: #eee;
  }
}

.can-copy {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;

  i {
    text-align: center;
    font-size: 45px;
    position: absolute;
    width: 70px;
    height: 70px;
    top: calc(50% - 35px);
    left: calc(50% - 35px);
    background-color: white;
    border-radius: 70px;
    line-height: 1.5;
  }

  div {
    width: 100%;
    color: white;
    font-size: 2rem;
    text-align: center;
    position: absolute;
    top: calc(70%);
  }
}

@media screen and (min-width:960px) {
  .wrapper {width: 100%;}
}

@media screen and (min-width:1024px) {
  .wrapper {width: 60%;}
}
</style>
