import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showDialog: false,
  },
  getters: {
    getShowDialog (state) {
      return state.showDialog
    }
  },
  mutations: {
    setShowDialog (state, payload) {
      state.showDialog = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
