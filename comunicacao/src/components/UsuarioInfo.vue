<template>
    <div class="componente">
        <h2 v-if="nomeExists">As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: {{ addSobrenome () }}</p>
        <button 
            :disabled="isDisabled"
            @click="reiniciarNome ()">
            Reiniciar Nome
        </button>
        <button 
            @click="restartNameCallback">
            Reiniciar Nome (callback)
        </button>
    </div>
</template>

<script>
export default {
    props: {
        nome: {
            type: String,
            required: true,
            // default: 'Informe o nome'
            // default: function () { // default tambem pode ser uma funcao
            //     return 'Informe o nome'
            // }
        },
        isDisabled: {
            type: Boolean,
            default: false
        },
        restartNameCallback: Function
    },
    computed: {
        nomeExists () {
            return this.nome ? true : false
        },
    },
    methods: {
        addSobrenome () {
            return this.nome + ' Sobrenome'
        },
        reiniciarNome () {
            this.nome = 'Gustavo'
            this.$emit('reiniciarNome', { // nome do evento pode ser qualquer um. sera referenciado no pai como @reiniciarNome
                nome: this.nome // onde "nome" sera o item do objeto a se pegar la no componente pai, pelo $event.nome
            })
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
