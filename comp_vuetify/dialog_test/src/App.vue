<template>  
  <v-app>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="5"
      class="elevation-1"
    >
    </v-data-table>
    <div id="myTable">
      <custom-table-headers />
    </div>
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
import { mapState, mapGetters } from 'vuex'
import MyModal from '@/components/MyModal.vue'
import Tela from '@/components/Tela.vue'
import CustomTableHeaders from '@/components/CustomTableHeaders.vue'

export default Vue.extend({
  name: 'App',
  components: {
    MyModal, Tela, CustomTableHeaders
  },
  data () {
    return {
      headers: [
        {
          text: 'TESTE',
          value: 'field1'
        },
        {
          text: 'OUTRO',
          value: 'field2'
        }
      ],
      items: [
        {
          field1: 'Field One',
          field2: 'Field Two'
        },
        {
          field1: 'Field One',
          field2: 'Field Two'
        }
      ],
      customHeadersTemplate: ''
    }
  },
  created () {
    this.customHeaders()
  },
  methods: {
    customHeaders () {
      for (const item in this.headers) {
        this.customHeadersTemplate += `
        <template v-slot:header.${this.headers[item].value}="{ header }">
          <span :id="header.text">{{ header.text }}</span>
        </template>`
        // console.log(this.customHeadersTemplate)
      }
    }
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
