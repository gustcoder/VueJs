new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        clicou(){
            alert('Me clicou!')
        },
        getData(event){
            this.valor = event.target.value
        }
    }
})