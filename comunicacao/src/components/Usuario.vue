<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p><strong>{{ nome }}</strong></p>
        <button @click="alterarNome">Alterar Nome</button>
        <hr>
        <div class="componentes">
            <app-usuario-info 
                :nome="nome"
                :isDisabled="hasName"
                :restartNameCallback="restartNameCallback"
                @reiniciarNome="nome = $event.nome"
            />
            <app-usuario-editar />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data () {
        return {
            nome: 'Gustavo'
        }
    },
    computed: {
        hasName () {
            return this.nome === ''
        }
    },
    methods: {
        alterarNome () {
            this.nome = 'Letícia'
        },
        // TODO: implementar metodo para colocar no @reiniciarNome
        // reiniciarNome () {
        //     this.nome = this.$event.nome
        // }
        restartNameCallback () {
            this.nome = 'o nome foi alterado via Callback'
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
