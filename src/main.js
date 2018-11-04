// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Card from './components/Card'
import New from './components/New'
import Login from './components/Login'
import Stream from './components/Stream'
import store from './store'

Vue.config.productionTip = false

Vue.component('card', Card)

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.conditionalRoute)) {
    if (!login.success) {
      next({ path: '/login' })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App, Login, New, Stream },
  template: '<App/>'
})
