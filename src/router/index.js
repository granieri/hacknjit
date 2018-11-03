import Vue from 'vue'
import Router from 'vue-router'
import Stream from '@/components/Stream'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Stream',
      component: Stream
    }
  ]
})
