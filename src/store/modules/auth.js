const state = {
  logged_in: false
}

const mutations = {
  LOG_IN_M (state) {
    state.logged_in = true
  },
  LOG_OUT_M (state) {
    state.logged_in = false
  }
}

const getters = {
  get_logged_in (state) {
    return state.logged_in
  }
}

const actions = {
  log_in ({ commit }) {
    commit('LOG_IN_M')
  },
  log_out ({ commit }) {
    commit('LOG_OUT_M')
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
