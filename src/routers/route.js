import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/': {
    component: (resolve) => {
      require(['../views/Index.vue'], resolve)
    }
  },
  '/index': {
    component: (resolve) => {
      require(['../views/Index.vue'], resolve)
    }
  },
  '/dev': {
    component: (resolve) => {
      require(['../views/Dev.vue'], resolve)
    }
  },
  '/settings': {
    component: (resolve) => {
      require(['../views/Settings.vue'], resolve)
    }
  }
})

export default router
