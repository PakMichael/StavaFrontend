import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  modal_active: false,
  modal_message: '',
  modal_callbacks: {},
  markers: [
    ["-84.754482", "18.11"],
    ["50.2", "18.3"],
  ],
  center: ["50.2", "18.3"]
}

const mutations = {
  set(state, [variable, value]) {
    state[variable] = value
  },

  modal(state, [isActive, message, callbacks]) {
    state.modal_active = isActive;
    state.modal_message = message;
    state.modal_callbacks = callbacks;

  }
}

export default new Vuex.Store({
  state,
  mutations
})