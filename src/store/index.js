import Vue from 'vue'
import Vuex from 'vuex'
// import store_document from './modules/store_document'
import storeConfig from './modules/storeConfig'
import storeTestData from './modules/storeTestData'

Vue.use(Vuex)

const store = new Vuex.Store({

  modules: {
    config: storeConfig,
    testData: storeTestData
  },

  state: {
    // counter : 0
  },
  actions: {
    // INCREMENT_COUNTER_PLUS: function ({commit}) {
    //   commit('INCREMENT_COUNTER', { number : 1 });
    // },
    // INCREMENT_COUNTER_MINUS: function ({commit}) {
    //   commit('INCREMENT_COUNTER', { number : -1 });
    // }
  },
  mutations: {
    // INCREMENT_COUNTER: (state, data) => {
    //   state.counter += data.number ;
    // }
  },

  getters: {
    // COUNTER: state => {
    //   return state.counter;
    // }
  }

})

export default store
