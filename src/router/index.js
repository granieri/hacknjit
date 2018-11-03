import Vue from 'vue'
import Router from 'vue-router'
import Stream from '@/components/Stream'
<<<<<<< HEAD
=======
import New from '@/components/New'
>>>>>>> d4c16f74d5e201b23921f89569e81a2e096e381b
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
<<<<<<< HEAD
      path: '/Login',
      name: 'Login',
      component: Login
=======
      path: '/new',
      name: 'New',
      component: New
    },
    {
      path: '*',
      redirect: '/'
>>>>>>> d4c16f74d5e201b23921f89569e81a2e096e381b
    }
  ]
})
