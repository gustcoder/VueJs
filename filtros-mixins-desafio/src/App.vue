<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<input type="text" v-model="texto" />
		<p>{{ getTexto | trocaEspacoPorVirgula }}</p>
		
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<input type="text" v-model="contaPalavra" />
		<p>{{ contaPalavra | contaPalavra }}</p>

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
export default {
	filters: {
		trocaEspacoPorVirgula(valor) {
			let novoValor = ''

			for (let index in valor) {
				novoValor += `${valor[index].replace(' ',',')}`
			}

			return novoValor
			
		}
	},
	data() {
		return {
			texto: '',
			contaPalavra: ''
		}
	},
	computed: {
		getTexto() {
			return this.texto
		},
		getContaPalavra() {
			return this.contaPalavra
		},
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
