import VueRouter from 'vue-router'
import Home from '@/views/Home/Home.vue'
import About from '@/views/About/About.vue'

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/about',
      component: About,
    },
  ],
})
