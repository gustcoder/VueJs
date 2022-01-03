import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('contaPalavra', function(frase) {
	let returnContaPalavra = ''
	const arrayPalavras = frase.split(' ')

	for (let palavra in arrayPalavras) {
		returnContaPalavra += `${arrayPalavras[palavra]} (${arrayPalavras[palavra].length}) `
	}

	return returnContaPalavra
})

new Vue({
	render: h => h(App),
}).$mount('#app')
