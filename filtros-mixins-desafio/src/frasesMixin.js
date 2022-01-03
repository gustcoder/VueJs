export default {
	computed: {
		getTexto() {			
			let novoTexto = ''
			for (let index in this.texto) {
				novoTexto += `${this.texto[index].replace(' ',',')}`
			}

			return novoTexto
		},
		getFrase() {
			const arrayPalavras = this.frase.split(' ')

			return arrayPalavras.map(palavra => `${palavra} (${palavra.length})`).join(' ')
		},
	}    
}