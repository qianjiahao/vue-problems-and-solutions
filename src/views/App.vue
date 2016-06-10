<template>
  <div id="app">
    <router-view :show-nav.sync="show"></router-view>
    <navigator :show-nav.sync="show"></navigator>
    <assistant :click="toggleNav"></assistant>
  </div>
</template>

<script>
import Assistant from '../components/Assistant.vue'
import Navigator from '../components/Nav.vue'

export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    toggleNav () {
      this.show = !this.show
    }
  },
  components: {
    Navigator,
    Assistant
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
