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
			<b-button @click="save" variant="primary">Salvar</b-button>
			<b-button @click="getUsers" variant="success" class="ml-2">Obter Usuários</b-button>
		</b-card>
		<b-alert v-show="getShowMessage" variant="success" show dismissible>Dados cadastrados com sucesso!</b-alert>
		<b-alert v-show="!validateData" v-model="showAlert" variant="danger" show dismissible>Preencha todos os dados!</b-alert>
		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
				<strong>Nome:</strong> {{ usuario.nome }}<br>
				<strong>E-mail:</strong> {{ usuario.email }}<br>
				<strong>ID:</strong> {{ id }}<br>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
	data () {
		return {
			usuarios: [],
			usuario: {
				nome: '',
				email: ''
			},
			response: '',
			showMessage: false,
			submit: false,
			showAlert: false
		}
	},
	created () {
		this.getUsers()
	},
	computed: {
		getShowMessage () {
			return this.showMessage
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
			this.showAlert = false
		},
		getUsers () {
			this.$http.get('usuarios.json').then(res => {
				this.usuarios = res.data
				// eslint-disable-next-line no-console
				console.log(this.usuarios)
			})
		},
		save () {
			if (!this.validateData) {
				this.showAlert = true
				return
			}

			this.$http.post('usuarios.json', this.usuario).then(res => {
				this.response = res
				this.reset()
				this.getUsers()
			})
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
