<template>
    <div class="usuario-lista">
        <table>
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Nome</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="usuario in usuarios" :key="usuario.id" @click="sendUser(usuario.id)">
                    <td>{{ usuario.id }}</td>
                    <td>{{ usuario.nome }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: { 
        usuarios: Array 
    },
    methods: {
        sendUser (userId) {
            userId -= 1 // ajusta para usar como indice do array
            this.$emit('sendUser', this.usuarios[userId])
            // console.log(this.usuarios[userId])
        }
    }
}
</script>

<style scoped>
    .usuario-lista {
        flex: 1;
        display: flex;
    }

    table {
        flex: 1;
        border-spacing: 0px;
        border-collapse: separate;
        border-top: 1px solid #CCC;
    }


    th, td {
        padding: 15px;
        border-bottom: 1px solid #CCC;
    }

    tbody tr:hover {
        cursor: pointer;
        background: rgba(0, 0, 0, 0.1);
    }
</style>
