<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<b-button variant="primary" class="mb-4" v-on:click="showMsg()">Exibir Mensagem</b-button>
		<transition name="fade">
			<b-alert variant="info" show v-if="show">
				{{ msg }}
			</b-alert>
		</transition>
	</div>
</template>

<script>

export default {
	data() {
		return {
			msg: 'Esta é uma mensagem.',
			show: false
		}
	},
	methods: {
		showMsg() {
			this.show = !this.show
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
	font-size: 1.5rem;
}

.fade-enter, .fade-leave-to {
	opacity: 0;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 1s;
}
</style>
