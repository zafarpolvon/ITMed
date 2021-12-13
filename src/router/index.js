import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Second from '../views/Second.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  scrollBehavior () {
    return {
      x: 0,
      y: 0
    }
  },
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/second',
      name: 'Second',
      component: Second
    }

  ]
})

export default router
