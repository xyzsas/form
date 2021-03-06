import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/:aid/:fid',
    component: () => import('../views/Form')
  }
]

const router = new VueRouter({
  routes
})

export default router
