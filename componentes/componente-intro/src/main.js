import Vue from 'vue'
import Contadores from './Contadores.vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.component('app-contadores', Contadores)

new Vue({
  render: h => h(App),
}).$mount('#app')
