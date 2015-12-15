import Vue from 'vue'
import Vuex from 'vuex'

import { navigatorInitialState, navigatorMutations } from './modules/navigator'

import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navigator: navigatorInitialState,
  },

  mutations: [navigatorMutations],
  actions,
})
