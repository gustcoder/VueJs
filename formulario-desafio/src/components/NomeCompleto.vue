<template>  
    <div class="nome__completo">
        <label>Nome Completo:</label>
        <span>{{ nome }} {{ sobrenome }}</span>
    </div>
</template>

<script>
export default {
    props: {
        nome: {
            type: String,
            default: ''
        },
        sobrenome: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
    .nome__completo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 15px 0px;
        font-size: 1.4rem;
    }

    .elemento {
        display: flex;
        align-self: stretch;
        margin: 10px 0px;
    }

    input, textarea, select {
        flex: 1;
        font-size: 1.4rem;
        outline: none;
        border: 1px solid #DDD;
        border-radius: 5px;
        padding: 5px 10px;
    }
</style>
