// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import plugin from './lib/index.js'
import "./../src/theme-default/index.css"
import echarts from 'echarts'

Vue.config.productionTip = false
Vue.prototype.echarts = echarts
Vue.use(echarts)

Vue.use(plugin)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App,plugin },
  template: '<App/>'
})
