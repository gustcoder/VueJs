<template>
	<div id="app">
		<button @click="toogleLoja(show.showLoja)">{{ textoLoja }} Loja</button>
		<h1>Exercícios Vuex</h1>
		<div class="linha">
			<Parametros />
			<DialogContent />
		</div>
		<div class="linha">
			<Carrinho />
			<Resumo />
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Parametros from './components/Parametros'
import Carrinho from './components/Carrinho'
import Resumo from './components/Resumo'
import DialogContent from './components/DialogContent'

export default {
	name: 'app',
	computed: { 
		...mapState(['show']),
		textoLoja () {
			if (this.show.showLoja) {
				return 'Ocultar'
			}
			return 'Exibir'
		}
	},
	components: { Parametros, Carrinho, Resumo, DialogContent },
	methods: {
		...mapMutations(['setShowLoja']),
		toogleLoja (showLoja) {
			this.setShowLoja(!showLoja)
		}
	}
}
</script>

<style>
* {
	font-family: 'Oswald', sans-serif;
}

body {
	font-size: 2rem;
	background: linear-gradient(to right, rgb(0, 0, 0), rgb(67, 67, 67));
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #FFF;
}

h1 {
	font-weight: 200;
}

.linha {
	display: flex;
}

button {
	font-size: 1.8rem;
	padding: 5px 15px;
	border-radius: 5px;
	color: #222;
	background-color: #FAFAFA;
	outline: none;
	border: none;
}
</style>
