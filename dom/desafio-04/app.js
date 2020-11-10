new Vue({
	el: '#desafio',
	data: {
		classeEfeito: 'destaque',
		noClass: ['noClass1', 'noClass2'],
		customClass: 'customClass1',
		removerTransform: false,
		estilo: 'width: auto; height: 20px; backgroundColor: black; color: white;',
		progressColor: 'blue',
		progressHeight: '20px',
		progressWidth: 0,
		stopLoading: false
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
					width: `${this.progressWidth}px`
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
			const loadingBar = setInterval(() => {
				!this.stopLoading ? this.progressWidth += 10 : clearInterval(loadingBar)
			}, 2000)
		}
	}
})
