<template>
  <div class="modal">
    <div class="bg" transition="bg" v-show="showNav"></div>
    <div class="content" transition="content" v-show="showNav">
      <div class="box" @click="link('/tag')">
        tag
      </div>
      <div class="box" @click="link('/about')">
        about me
      </div>
      <div class="box" @click="link('/')">
        search
      </div>
      <div class="box" @click="link('/theme')">
        theme
      </div>
    </div>
  </div>
</template>

<script>
import router from '../routers/route.js'

export default {
  props: ['show-nav'],
  methods: {
    link (target) {
      router.go({path: target})
      this.showNav = false
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {

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
    height: 130px;
    position: absolute;
    top: calc(50% - 60px);
    left: calc(50% - 100px);
    overflow: hidden;
    background-color: white;
    z-index: 1000;
    box-sizing: border-box;
    padding: 20px;
    transition: 0.2s all;

  }
}

.bg-leave, .bg-enter,
.content-leave, .content-enter {
  opacity: 0;
}

.content-leave, .content-enter {
  transform: scale(1.1);
}

.box {
  width: 40%;
  box-sizing: border-box;
  float: left;
  margin: 5%;
  text-align: center;
  background-color: #eee;
}
</style>
