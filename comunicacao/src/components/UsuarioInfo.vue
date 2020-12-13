<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: {{ addSobrenome () }}</p>
        <button @click="reiniciarNome ()">Reiniciar Nome</button>
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
        }
    },
    methods: {
        addSobrenome () {
            return this.nome + ' Sobrenome'
        },
        reiniciarNome () {
            this.nome = 'Gustavo'
            this.$emit('reiniciarNome', {
                nome: this.nome
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
