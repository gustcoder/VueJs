new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        // teste branch
        // resetValor () {
        //     if (this.valor == 37) {
        //         setTimeout(() => this.valor = 0, 5000)
        //     } 
        // },
        resultado () {
            //this.resetValor
            return this.valor != 37 ? 'Valor Diferente' : 'Valor Igual'
        }
    },
    /* implementacao do curso... Esqueci do Watch!!! =/ */
    watch: {
        resultado () {
            setTimeout(() => this.valor = 0, 5000)            
        }
    }
});