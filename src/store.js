import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: null,
    projectId: null,
    LayerHierarchy: null,
    Layers: null,
    uuid: null
  },
  mutations: {
    setUserData (state, payload) {
      state.userData = payload
    },
    setProjectId (state, payload) {
      state.projectId = payload
    },
    setHierarchy (state, payload) {
      state.LayerHierarchy = payload
    },
    setLayers (state, payload) {
      state.Layers = payload
    },
    setUUID (state, payload){
      state.uuid = payload
    }
  },
  actions: {
    updateProject ({ commit }, { projectId, LayerHierarchy, Layers }) {
      commit('setHierarchy', LayerHierarchy)
      commit('setLayers', Layers)
      commit('setProjectId', projectId)
    },
    restoreData ({ commit }) {
      const uData = JSON.parse(localStorage.getItem('session'))
      commit('setUserData', uData)
      const projectId = JSON.parse(localStorage.getItem('projectId'))
      commit('setProjectId', projectId)
      const hierarchy = JSON.parse(localStorage.getItem('LayerHierarchy'))
      commit('setHierarchy', hierarchy)
      const layers = JSON.parse(localStorage.getItem('Layers'))
      commit('setLayers', layers)
    }
  }
})
