import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fields: [
      {
        name: "A",
        japanese: 70,
        mathematics: 40,
        english: 80,
        science: 40,
        history: 20,
        sum:0, 
        average:0, 
        stdev:0, 
      },
      {
        name: "B",
        japanese: 30,
        mathematics: 40,
        english: 50,
        science: 40,
        history: 20,
        sum:0, 
        average:0, 
        stdev:0, 
      },
    ],
  },
  mutations: {
    insertfields(state, payload){
      state.fields.push(payload.fields[0])
    },
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
    insertfields(store,payload){
      store.commit('insertfields' ,payload)
    },
    updatefields(store,payload){
      store.commit('updatefields' ,payload)
    },
    
  },
  modules: {
  },
  getters: {
    getfields: function(state){
      for(let field of state.fields){
        field.sum = 
          field.japanese + 
          field.mathematics +
          field.english +
          field.science +
          field.history
        field.average = field.sum / 5
      
        }
      return state.fields
    }
  }
})
