<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{ cpf | formatCpf | inverter }}</p>
		<input type="text" :value="getCpf | formatCpf">
		<hr>
		<Frutas />
	</div>
</template>

<script>
import Frutas from './Frutas.vue'

export default {
	components: { Frutas },
	filters: {
		formatCpf(valor) {
			const arr = valor.split('')
			arr.splice(3,0,'.')
			arr.splice(7,0,'.')
			arr.splice(11,0,'-')

			return arr.join('')
		}
	},
	data() {
		return {
			cpf: '09182309280'
		}
	},
	computed: {
		getCpf() {
			return this.cpf
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
