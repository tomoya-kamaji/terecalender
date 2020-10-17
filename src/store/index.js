import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fields: [
      { key: 'organization', label: '#' ,variant: 'danger'},
      { key: 'k', label: '国語' },
      { key: 's', label: '算数' },
      { key: 'e', label: '英語' },
      { key: 'r', label: '理科' },
      { key: 'sya', label: '社会' },
    ],
    items: [
      {
        organization: '京都ビジネスイノベーション3課',
        k: '80',
        s: '70',
        e: '60',
        r: '20',
        sya: '70'
      },
    ]

  },
  mutations: {
    addAddress(state, payload){
      // address.id = id
      console.log(payload)
      state.items.pop()
    },


  },
  actions: {
    addAddress(store,payload){
      store.commit('addAddress' ,payload)
    },
    
  },
  modules: {
  },
  getters: {
    getState: (state) => state.items
  }
})
