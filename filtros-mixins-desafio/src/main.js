import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('contaPalavra', function(frase) {
	const arrayPalavras = frase.split(' ')

	return arrayPalavras.map(palavra => `${palavra} (${palavra.length})`).join(' ')
})

new Vue({
	render: h => h(App),
}).$mount('#app')
