import router from './routers/route.js'
import App from './views/App.vue'
import Vue from 'vue'
import './iconfont/iconfont.css'

router.start(App, '#root')

Vue.filter('marked-img', (value) => {
  let scrollWidth = document.body.scrollWidth
  let width
  if (scrollWidth <= 960) {
    width = scrollWidth - 20 + 'px'
  } else {
    width = 100 + '%'
  }
  return value.replace(new RegExp('<img', 'g'), '<img style="width: ' + width + ';"')
})
