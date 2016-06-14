import router from './routers/route.js'
import App from './views/App.vue'
import Vue from 'vue'
import './iconfont/iconfont.css'

router.start(App, '#root')

Vue.filter('marked-img', (value) => {
  let width = 100 + '%'
  return value.replace(new RegExp('<img', 'g'), '<img style="width: ' + width + ';box-sizing: border-box;"')
})
