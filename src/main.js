import Vue from 'vue'
import App from './App.vue'
import router from './router/routers'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app')

import Pagination from './components/Pagination/Pagination.vue'
Vue.component(Pagination.name, Pagination)
