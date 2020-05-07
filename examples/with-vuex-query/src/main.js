// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from "./store"
import VueQuery from '../../../packages/vue-query/src'

Vue.config.productionTip = false

Vue.use(VueQuery)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store
})
