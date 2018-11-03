import Vue from 'vue'
import Router from 'vue-router'
import Stream from '@/components/Stream'
import New from '@/components/New'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/stream',
      name: 'Stream',
      component: Stream
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/new',
      name: 'New',
      component: New
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
