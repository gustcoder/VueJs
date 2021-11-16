<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input 
					type="text"
					size="lg"
					v-model="usuario.nome"
					placeholder="Informe o nome"
				>
				</b-form-input>
			</b-form-group>
			<b-form-group label="E-mail:">
				<b-form-input 
					type="email"
					size="lg"
					v-model="usuario.email"
					placeholder="Informe o e-mail"
				>
				</b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="salvar" variant="primary">Salvar</b-button>
		</b-card>
		<b-alert v-show="getShowMessage" variant="success" show dismissible>Dados cadastrados com sucesso!</b-alert>
		<b-alert v-show="!validateData && checkSubmit" variant="danger" show dismissible>Preencha todos os dados!</b-alert>
	</div>
</template>

<script>
export default {
	// created () {		
	// 	/* eslint-disable */
	// 	this.$http.post('usuarios.json', {
	// 		'nome': 'Gustavo',
	// 		'email': 'gustavo@teste.com'
	// 	}).then(res => console.log(res))
	// }
	data () {
		return {
			usuario: {
				nome: '',
				email: ''
			},
			response: '',
			showMessage: false,
			submit: false
		}
	},
	computed: {
		getShowMessage () {
			return this.showMessage
		},
		checkSubmit () {
			return this.submit
		},
		validateData () {
			return this.usuario.nome && this.usuario.email
		}
	},
	methods: {
		reset () {
			this.showMessage = true
			this.usuario.nome = '',
			this.usuario.email = ''
			this.submit = false
		},
		salvar() {
			this.submit = true
			if (!this.validateData) {
				return
			}

			// eslint-disable-next-line no-console
			console.log(this.usuario)
				this.$http.post('usuarios.json', {
					'nome': this.usuario.nome,
					'email': this.usuario.email
				}).then(res => this.response = res)
			this.reset()
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
