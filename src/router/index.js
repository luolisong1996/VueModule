import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import button from '../components/Button/index'
import echarts from '../components/echarts/echarts'
import dropdown from '../components/dropdown/dropdown'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/button',
      name: 'button',
      component: button
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: echarts
    },
    {
      path: '/dropdown',
      name: 'dropdown',
      component: dropdown
    }
  ]
})
