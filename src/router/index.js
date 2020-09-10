import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/fetch/:aid',
    component: () => import('../views/Fetch')
  },
  {
    path: '/form/:fid',
    component: () => import('../views/Form')
  },
  {
    path: '/finish',
    component: () => import('../views/Finish')
  }
]

const router = new VueRouter({
  routes
})

export default router
