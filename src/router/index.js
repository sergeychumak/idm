import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/05_page/Index'
import addNewRequest from '@/components/05_page/addNewRequest'
import PageNotFound from '@/components/05_page/PageNotFound'
import Auth from '@/components/05_page/Auth'

import accessControl from '@/components/05_page/p_accessControl'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: Auth
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/access_control',
          name: 'access_control',
          component: accessControl
        },
        {
          path: '/add_new_request',
          name: 'add_new_request',
          component: addNewRequest
        },
        { path: '*', component: PageNotFound }
      ]
    },
    { path: '*', component: PageNotFound }
  ]
})
