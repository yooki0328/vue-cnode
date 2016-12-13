import * as actions from './actions'
import * as getters from './getters'
import Vuex from 'vuex'
import Vue from 'vue'
import * as modules from './modules/'

Vue.use(Vuex)
export default new Vuex.Store({
  actions,
  modules: modules,
  getters
})
