import Vue from 'vue'
import VueRouter from 'vue-router'
import PageOne from "../views/PageOne.vue"
import PageTwo from "../views/PageTwo.vue"
import Index from "../views/Index"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '导航1',
    redirect:'/PageOne',
    component: Index,
    children:[
      {
        path: '/PageOne',
        name: '页面1',
        component: PageOne
      },
    ]
  },
  {
    path: '/nagivation',
    name: '导航2',
    component: Index,
    children:[
      {
        path: '/PageTwo',
        name: '页面2',
        component: PageTwo
      },
    ]
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
