import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/': {
    component: (resolve) => {
      require(['../views/Search.vue'], resolve)
    }
  },
  '/search': {
    component: (resolve) => {
      require(['../views/Search.vue'], resolve)
    }
  },
  '/anwser': {
    component: (resolve) => {
      require(['../views/Answer.vue'], resolve)
    }
  },
  '/tag': {
    component: (resolve) => {
      require(['../views/Tag.vue'], resolve)
    }
  },
  '/about': {
    component: (resolve) => {
      require(['../views/About.vue'], resolve)
    }
  },
  '/theme': {
    component: (resolve) => {
      require(['../views/Theme.vue'], resolve)
    }
  }
})

export default router
