import router from './routers/route.js'
import App from './views/App.vue'
import Vue from 'vue'
import './iconfont/iconfont.css'

router.start(App, '#root')

Vue.filter('marked-img', (value) => {
  return value.replace(new RegExp('<img', 'g'), '<img class="marked-img" onclick="markedImg(this)"')
})
