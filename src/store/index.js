import Vue from 'vue'
import Vuex from 'vuex'
import targetModule from './modules/target_module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    targetModule,
  },
})
