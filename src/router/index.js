import Vue from 'vue'
import Router from 'vue-router'
import Stream from '@/components/Stream'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Stream',
      component: Stream
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
