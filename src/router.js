import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/assign'
    },
    {
      path: '/assign',
      name: 'Assign',
      component: () => import('./views/Assign.vue')
    }
  ]
})