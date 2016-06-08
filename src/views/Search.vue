<template>
  <div class="container">
    <div class="wrapper">
      <div class="logo">

      </div>
      <div class="content">
        <div class="bar">
          <input
            class="input"
            type="text"
            name="name"
            v-model="value"
            @keyup.enter="submit"
            @click="selectAll"
            placeholder="空格分隔关键字"
          >
        </div>
        <i class="iconfont icon-search search" @click="submit" ></i>
      </div>
      <div class="auto" v-show="!!value">
        sdfsdf
      </div>
    </div>
  </div>
</template>

<script>
export default {
  ready () {
    let speed = 25

    window.addEventListener('devicemotion', (e) => {
      var acceleration = e.accelerationIncludingGravity
      let x = acceleration.x
      let y = acceleration.y
      let lastX = 0
      let lastY = 0
      if (Math.abs(x - lastX) > speed || Math.abs(y - lastY) > speed) {
        if (this.value && window.confirm('是否清空输入字符?')) {
          this.value = ''
        }
      }
    })
  },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    selectAll (e) {
      e.target.select()
    },
    submit () {
      console.log('submit')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
}

.wrapper {
  width: 90%;
  margin: 0 auto;
  position: relative;;
}

.logo {
  width: 100px;
  height: 100px;
  margin: 20px auto 40px auto;

  background-image: url(../images/logo.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.content {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  border: 1px solid #ccc;

  &:focus, &:hover {
    border: 1px solid #5dc596;
  }
}

.bar {
  width: calc(100% - 30px);
  position: relative;
}

.input {
  width: 100%;
  font-size: 2rem;
  border: none;
  outline: none;
  padding: 10px 50px 10px 10px;
  position: relative;
  box-sizing: border-box;
  color: #666;
}

.search {
  font-size: 3rem;
  display: inline-block;
  position: absolute;
  padding: 4px 15px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  color: white;
  cursor: pointer;
  background-color: #5dc596;
}

.auto {
  width: 100%;
  padding: 10px;
  background-color: #eee;
  box-sizing: border-box;
  font-size: 2rem;
  border: 1px solid #ccc;
  border-top: 0;
}
@media screen and (min-width:960px) {
  .wrapper {
    width: 80%;
  }
}

@media screen and (min-width:1024px) {
  .wrapper {
    width: 60%;
  }

  .input, .submit {
    // font-size: 2.4rem;
  }
}

@media screen and (min-width:1240px) {
  .wrapper {
    width: 50%;
  }

  .input, .submit {
    // font-size: 2rem;
  }
}
</style>
