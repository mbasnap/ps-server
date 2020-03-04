import { db } from '@/db'
const { get, post } = db('/lombard')

const state = {
  lombards: []
}
const getters = {
  lombards ({ lombards }) {
    return lombards || []
  }
}
const mutations = {
  lombards (state, v) {
    // console.log(v)
    state.lombards = v || []
  }
}
const actions = {

  async remove ({ dispatch }, v) {
    await post('/remove', v)
    return dispatch('update')
  },

  async save ({ dispatch }, v) {
    await post('/', v)
    return dispatch('update')
  },

  async update ({ commit }) {
    commit('lombards', await get('/'))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}