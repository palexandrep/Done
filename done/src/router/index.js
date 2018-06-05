import Vue from 'vue'
import Router from 'vue-router'
import log from '@/components/log'
import inscription from '@/components/inscription'
import login from '@/components/login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'log',
      component: log
    },
    {
      path: '/inscription',
      name: 'inscription',
      component: inscription
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }

  ]
})
