<template>
  <div class="modal">
    <div class="bg" transition="bg" v-show="showNav" @click="showNav=false"></div>
    <div class="content" transition="content" v-show="showNav">
      <div class="box iconfont icon-code" @click="link('/dev')"></div>
      <div class="box iconfont icon-search" @click="link('/')"></div>
      <a class="box iconfont icon-github" href="https://github.com/qianjiahao/vue-problems-and-solutions" target="_blank"></a>
    </div>
    <i :class="{'iconfont': true, 'icon-top': backToTop, 'back-to-top': true}" @click="back"></i>
  </div>
</template>

<script>
import router from '../routers/route.js'

export default {
  ready () {
    window.jQuery(window).scroll(() => {
      if (window.jQuery(window).scrollTop() > 100) {
        this.backToTop = true
      } else {
        this.backToTop = false
      }
    })
  },
  props: ['show-nav'],
  data () {
    return {
      backToTop: false
    }
  },
  methods: {
    link (target) {
      router.go({path: target})
      this.showNav = false
    },
    back () {
      window.jQuery('body,html').animate({
        scrollTop: 0
      }, 350)
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: relative;

  .bg {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.6);
    transition: 0.2s all;
  }

  .content {
    width: 200px;
    position: fixed;
    top: calc(50% - 60px);
    left: calc(50% - 100px);
    overflow: hidden;
    z-index: 1000;
    box-sizing: border-box;
    transition: 0.2s all;
    background-color: white;
  }
}

.bg-leave,
.bg-enter,
.content-leave,
.content-enter {
  opacity: 0;
}

.content-leave,
.content-enter {
  transform: scale(1.1);
}

.box {
  width: 40%;
  text-align: center;
  font-size: 35px;
  box-sizing: border-box;
  float: left;
  margin: 5%;
  text-align: center;
  color: #222;
  text-decoration: none;
}

.back-to-top {
  font-size: 30px;
  position: fixed;
  padding: 0 10px;
  right: 10px;
  bottom: 60px;
  width: 32px;
  z-index: 100;

}
</style>
