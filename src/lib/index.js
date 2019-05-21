import Button from '../lib/Button/src/button.vue';
import echarts from '../lib/echarts/index.vue';
import dropdown from '../lib/dropdown/index.vue';

const plugin = {
  install(Vue){
    Vue.component('at-button', Button)
    Vue.component('echarts', echarts)
    Vue.component('drop-down', dropdown)
  }
}

if(typeof window !=='undefined' && window.Vue){
  window.Vue.use(plugin)
}
export default plugin