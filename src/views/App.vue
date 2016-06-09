<template>
  <div id="app">
    <router-view :show-nav.sync="show"></router-view>
    <navigator :show-nav.sync="show"></navigator>
  </div>
</template>

<script>
import Navigator from '../components/Nav.vue'

export default {
  ready () {
    window.addEventListener('devicemotion', (e) => {
      let speed = 30
      var acceleration = e.accelerationIncludingGravity
      let x = acceleration.x
      let y = acceleration.y
      let lastX = 0
      let lastY = 0
      if (Math.abs(x - lastX) > speed || Math.abs(y - lastY) > speed) {
        if (this.show === false) {
          this.show = true
        }
      }
    })
  },
  data () {
    return {
      show: false
    }
  },
  components: {
    Navigator
  }
}
</script>

<style>
html, body, #app {
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  font-size: 10px;
}
</style>
