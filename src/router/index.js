import Vue from 'vue'
import Router from 'vue-router'
import Stream from '@/components/Stream'
import New from '@/components/New'
import Login from '@/components/Login'
import Sent from '@/components/Sent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Stream',
      component: Stream,
      meta: { conditionalRoute: true }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/new',
      name: 'New',
      component: New,
      meta: { conditionalRoute: true }
    },
    {
      path: '/sent',
      name: 'sent',
      component: Sent
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
