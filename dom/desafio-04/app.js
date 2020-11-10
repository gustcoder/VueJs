new Vue({
	el: '#desafio',
	data: {
		classeEfeito: 'destaque',
		noClass: ['noClass1', 'noClass2'],
		customClass: 'customClass1',
		removerTransform: false,
		estilo: 'width: 500px; height: 20px; backgroundColor: black; color: white;',
		progressColor: 'blue',
		progressHeight: '20px',
		progressWidth: '500px',
		stopLoading: false,
		width: '0'
	},
	computed: {
		customStyle() {
			return this.customClass
		},
		progressBar() {
			if (this.progressWidth == 100) {
				this.stopLoading = true
				alert('Carregamento concluido!')
			} else {
				return {
					backgroundColor: this.progressColor,
					height: this.progressHeight,
					width: `${this.progressWidth}%`
				}
			}
		}
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classeEfeito == 'encolher' ? this.classeEfeito = 'destaque' :  this.classeEfeito = 'encolher'
			}, 2000)
		},
		iniciarProgresso() {
			let valor = 0
			const loadingBar = setInterval(() => { 
				valor += 5
				this.width = `${valor}%`
				if (valor == 100) clearInterval(loadingBar)
			}, 500)
			// const loadingBar = setInterval(() => {
			// 	!this.stopLoading ? this.progressWidth += 5 : clearInterval(loadingBar)
			// }, 2000)
		}
	}
})
