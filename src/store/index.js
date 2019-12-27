import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        name: 'Purchase milk',
        done: false
      },
      {
        id: 2,
        name: 'Purchase book about Vue.js',
        done: true
      }
    ]
  }
})

export default store
