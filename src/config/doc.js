import tag from './tag.js'

export default [
  {
    title: 'this 指向',
    tags: [tag.this],
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
    title: 'this 指向',
    tags: [tag.this],
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
    title: 'this 指向',
    tags: [tag.this],
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
    title: 'this 指向',
    tags: [tag.this],
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
    title: 'this 指向',
    tags: [tag.this],
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
    title: 'this 指向',
    tags: [tag.this],
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
  }
]
