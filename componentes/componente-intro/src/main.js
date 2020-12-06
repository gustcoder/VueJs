import Vue from 'vue'
import Contador from './Contador.vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.component('app-contador', Contador)

new Vue({
  render: h => h(App),
}).$mount('#app')
