import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fields: [
      {
        name: "a",
        japanese: 30,
        mathematics: 40,
        english: 80,
        science: 40,
        history: 20,
        sum:100, 
        average:100, 
        stdev:100, 
      },
    ],
  },
  mutations: {
    updatefields(state, payload){
      state.fields = payload.fields
      state.fields[0].sum = 
        payload.fields.[0].japanese + 
        payload.fields.[0].mathematics +
        payload.fields.[0].english +
        payload.fields.[0].science +
        payload.fields.[0].history
      
      state.fields[0].average = state.fields[0].sum / 5
    },


  },
  actions: {
    updatefields(store,payload){
      store.commit('updatefields' ,payload)
    },
    
  },
  modules: {
  },
  getters: {
    getfields: (state) => state.fields
  }
})
