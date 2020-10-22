new Vue({
    el: '#desafio',
    data: {
        nome: 'Gustavo Faria Ramos',
        idade: 31,
        myImg: 'https://s3.amazonaws.com/thinkific-import/220759/AaQOupKTMCZDEzzmIaSR_SO-LOGO-300.png' 
    },
    methods: {
        novaIdade: function(){
            return this.idade * 3
        },
        // Testing push
        numRandom: function(){
            return Math.random()
        }
    }    
})