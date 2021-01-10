<template>
    <div>
        <Loja v-if="show.showLoja" />
        <Test v-if="!show.showLoja" />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Loja from './Loja.vue'
import Test from './Test.vue'

export default {
    components: {
        Loja, Test
    },
    computed: {
        ...mapState(['show'])
    }
}
</script>

<style>

</style>