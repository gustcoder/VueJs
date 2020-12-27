import Vue from 'vue'
import App from './App.vue'
import store from './store/store.js'

Vue.config.productionTip = false

import Painel from './components/Painel'
Vue.component('Painel', Painel)

Vue.filter('dinheiro', valor => {
	return `R$ ${parseFloat(valor).toFixed(2)}`.replace('.', ',')
})

new Vue({
	render: h => h(App),
	store
}).$mount('#app')
