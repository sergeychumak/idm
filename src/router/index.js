import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/05_page/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
