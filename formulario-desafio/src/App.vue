<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel" v-if="!enviado">
				<div class="cabecalho">Formulário</div>
				<!-- Exercicio 01 -->
				<!-- Criar uma formulário de registro -->
				<!-- Nome completo (Nome e Sobrenome) -->
				<!-- Email -->
				<!-- Senha -->
				<!-- Armazenar Dados? (Sim/Não) -->
					<Rotulo nome="Nome">						
						<input type="text" v-model="usuario.nome">
					</Rotulo>
					<Rotulo nome="Sobrenome">						
						<input type="text" v-model="usuario.sobrenome">
					</Rotulo>
					<Rotulo nome="E-mail">						
						<input type="text" v-model="usuario.email">
					</Rotulo>
					<Rotulo nome="Senha">						
						<input type="password" v-model="usuario.senha">
					</Rotulo>
					<Rotulo nome="Armazenar Dados" type="checkbox">						
						<input type="checkbox" style="cursor: pointer;" v-model="usuario.armazenarDados">
					</Rotulo>
					<div v-if="noData && dadosVazios" class="noData">Por favor preencha o formulário!</div>
					<button @click.prevent="enviar()">Enviar</button>
				<!-- Exercicio 02 -->
				<!-- Só mostrar o fomulário de não tiver sido submetido -->
				<!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->
				
				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->
			</form>
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
					<NomeCompleto 
						:nome="usuario.nome"
						:sobrenome="usuario.sobrenome"
					/>
					<Rotulo nome="E-mail">
						<span>{{ usuario.email }}</span>
					</Rotulo>
					<Rotulo nome="Senha">
						<span>{{ usuario.senha }}</span>
					</Rotulo>
					<Rotulo nome="Armazenar Dados" type="checkbox">
						<span>{{ usuario.armazenarDados }}</span>
					</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import NomeCompleto from './components/NomeCompleto.vue'

export default {
	name: 'app',
	components: { Rotulo, NomeCompleto },
	data () {
		return {
			usuario: {
				nome: '',
				sobrenome: '',
				email: '',
				senha: '',
				armazenarDados: false
			},
			dadosVazios: false,
			enviado: false
		}
	},
	computed: {
		noData () {
			const { nome, sobrenome, email, senha } = this.usuario
			return !nome || !sobrenome || !email || !senha
		}
	},
	methods: {
		enviar () {
			if (this.noData) {
				this.dadosVazios = true
				return
			}

			this.enviado = true
			this.dadosVazios = false
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	cursor: pointer;
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}

.noData {
	display: flex;
	flex-direction: column;
	justify-items: center;
	padding: 10px;
	background-color: lightcoral;
	border: 1px solid #999;
	border-radius: 5px;
	color: white;
}
</style>
