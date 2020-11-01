import Vue from 'vue'
import Router from 'vue-router'
import Headertop from "../pages/Headertop.vue"
import Content from '../pages/Content.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Headertop',
      component: Headertop},{
      path: '/content',
      name: 'Content',
      component: Content
    }
  ]
})
