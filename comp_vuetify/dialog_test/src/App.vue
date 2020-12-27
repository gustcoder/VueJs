<template>
  <v-app>
    <v-dialog
      v-model="getShowDialog"
      overlay-color="purple"
      persistent
      max-width="500"
    >   
      <Tela />      
    </v-dialog>
    Exibir dialog: {{ exibirState }}
    <MyModal />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import MyModal from '@/components/MyModal.vue'
import Tela from '@/components/Tela.vue'

import { mapState, mapGetters } from 'vuex'

export default Vue.extend({
  name: 'App',
  components: {
    MyModal, Tela
  },
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
    ...mapState({
      exibirState: 'showDialog'
    }),
    ...mapGetters(['getShowDialog'])
    // showDialog () {
    //   // return this.$store.state.showDialog
    //   return this.$store.getters.getShowDialog
    // }
  }
});
</script>
