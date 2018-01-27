import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

import mynav from '@/components/mostout/nav'
import sidebar from '@/components/mostout/sidebar'
import helloworld from '@/components/HelloWorld'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/index',
      component: index,
      menuShow: true,
      children: [
        {
          path: '/index',
          components: {
            default: helloworld,
            mynav: mynav,
            sidebar: sidebar
          },
          name: '首页',
          menuShow: true}
      ]
    },
    {
      path: '/',
      name: 'index',
      redirect: '/index',
      component: index,
      children: [
        {
          path: '/index',
          components: {
            default: helloworld,
            mynav: mynav,
            sidebar: sidebar
          },
          name: '首页'}
      ]
    }
  ]
})
