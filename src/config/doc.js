import tag from './tag.js'

export default [
  {
    id: 'a013bff1-8912-406f-ae9c-0875a8529d17',
    title: 'eslint静态检查',
    tags: [tag['eslint']],
    content: `在大家用vue-cli创建工程的时候，会有一项，使用使用eslint，如果选择了y，那么工程就会安装并启用eslint。

这里列举一下常见的错误：

1.多余的分号
![图片描述][1]

2.定义了却未使用的变量
![图片描述][2]

3.结尾多余空格
![图片描述][3]

4.超过一行的空行
![图片描述][4]

5.代码尾行应该有空行
![图片描述][5]

错误肯定是列举不完的，那么提示错误的时候，我们应该先去看提示信息（翻译），如果发现没有错误，可以对照[eslint的官方文档][6]

在大家适应了eslint的写法后，效率和正确率会直线上升

[1]: https://segmentfault.com/img/bVvhFl
  [2]: https://segmentfault.com/img/bVvhFs
  [3]: https://segmentfault.com/img/bVvhFE
  [4]: https://segmentfault.com/img/bVvhFN
  [5]: https://segmentfault.com/img/bVvhFR
  [6]: http://eslint.org/`
  },
  {
    id: '77c55630-2fbb-11e6-ac64-b50848dab1ca',
    title: 'this指向',
    tags: [tag['this'], tag['箭头符号']],
    content: `经常会有朋友问一些undifined的错误，比如：

    <script>
    import Hello from './components/Hello'

    export default {
      data () {
        return {
          list: ['a', 'b', 'c'],
          idx: 0,
          current: ''
        }
      },
      methods: {
        iter () {
          this.list.map(function (v, k) {
            if (k === this.idx) {
              this.current = v

              console.log(this.current)
            }
          })
        }
      },
      components: {
        Hello
      }
    }
    </script>

这是刚创建的工程，我们定义了list，idx和current，在执行iter方法时，我们就给current赋值以idx为下标的值，当我们执行后会发现，浏览器报了一个错误

![图片描述][8]

这么回事，我们不是定义了idx了吗？

其实是因为我们在map里的this是指向当前map的迭代对象，而非我们vue的实例，所以this里没有我们需要的idx。

解决方式有两种，其一是通过保存this

    let _this = this

其二是使用es6箭头函数

    methods: {
        iter () {
          this.list.map((v, k) => {
            if (k === this.idx) {
              this.current = v

              console.log(this.current)
            }
          })
        }
      },

现在再看我们的浏览器

![图片描述][9]

已经可以达到我们预期的效果了！

[8]: https://segmentfault.com/img/bVvhHk
  [9]: https://segmentfault.com/img/bVvhHG`
  },
  {
    id: '83ea9ec0-2fbb-11e6-9485-6f1a608fe2fc',
    title: '根据$index判断当前值',
    tags: [tag['$index']],
    content: `比如我们有一个列表，我们希望能显示我们当前选中的那一个，如何实现呢？

基本思路是通过$index来判断是否是当前迭代对象，然后去增减class或者style来实现不同的样式

    <ul>

      <!-- 方法1 class-->
      <li v-for="item in list" :class="{'active': $index === activeId}">{{item}}</li>

      <!-- 方法2 style-->
      <li v-for="item in list" :style="{backgroundColor: $index === activeId ? 'red' : 'white'}">{{item}}</li>
    </ul>

    data () {
      return {
        list: ['a', 'b', 'c'],
        activeId: 0
      }
    },`
  },
  {
    id: '8f67e780-2fbb-11e6-87d4-93f110a8c904',
    title: '传值与传字面量',
    tags: [tag['字面量']],
    content: `在vue的组件中传递数据，如果是单纯传递字面量，如

    <hello result="success"></hello>

那么在hello中获取的props result的值就是“success”，如果希望进行值传递，需要在指令前加 ':' 冒号，这样，父层的success的值改变，hello的值也会跟着改变。`
  },
  {
    id: '9649af20-2fbb-11e6-8f62-b3fe7c319399',
    title: '转场动画transition',
    tags: [tag['transition']],
    content: `在vue中有个很好用的指令，transition，通过它我们可以实现自定义的router切换中的动画

方法就是在

    <router-view transition="fade"></router-view>

加入自定义的class fade-transition , fade-leave , fade-enter即可。`
  },
  {
    id: 'b4bf6b31-4f86-4411-83c8-a72d590a5c71',
    title: 'v-cloak',
    tags: [tag['v-cloak']],
    content: `如果出现{{}}的短暂出现的情况，可以通过添加v-cloak来处理。

这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。`
  },
  {
    id: 'fbb9fe7a-0748-45c1-b9fe-fc8d05beaf72',
    title: '使用sass',
    tags: [tag['sass']],
    content: `首先安装依赖

    npm i node-sass sass-loader -D

然后在vue的style里添加

    <style lang="scss" scoped>

注意：是"scss"!然后重启webpack，就ok啦`
  },
  {
    id: 'e6173714-348f-49e4-b749-4ad5c78a94bb',
    title: 'vue片段 fragment',
    tags: [tag['fragment'], tag['template']],
    content: `有时候我们会看到这个警告
![图片描述][10]

这是因为我们的template中，出现了片段，那么这个片段到底是什么gui呢？

我们可以理解为是一段没有根的dom元素，官网上是这么描述的

下面几种情况会让实例变成一个片断实例：

    模板包含多个顶级元素。
    模板只包含普通文本。
    模板只包含其它组件（其它组件可能是一个片段实例）。
    模板只包含一个元素指令，如 <partial> 或 vue-router 的 <router-view>。
    模板根节点有一个流程控制指令，如 v-if 或 v-for。

vue建议我们为片段添加一个根节点，这样方便传递props和过渡效果，也可以让dom更好的溯源，所以，解决方法很简单，在template的内部套一层div即可，像这样

    // 片段

    <template>
      <h1>hello</h1>
      <h2>world</h2>
    </template>

------
    // 套div

    <template>
      <div>
        <h1>hello</h1>
        <h2>world</h2>
      </div>
    </template>

[10]: https://segmentfault.com/img/bVxHyr`
  },
  {
    id: '793a6027-8e0a-4280-80af-dc0b5c194049',
    title: 'img 使用',
    tags: [tag['img'], tag['webpack'], tag['class'], tag['style']],
    content: `首先，如果使用的是img标签那么可以这样

    data () {
        return {
            img: require('path/to/your/source')
        }
    }

    然后在template中

    <img :src="img" />

如果使用的是背景图的方式，那么

    可以这样

    data () {
        return {
            img: require('path/to/your/source')
        }
    }

    <div :style="{backgroundImage: 'url(' + img + ')'}"></div>

    或者直接在css中定义

    background-image: url('path/to/your/source');

如果你的webpack配置了html-loader，那么久很方便了，只在img的src中写入相对路径

    <img src="./images/logo.png" />

轻松又愉快
`
  }
]
