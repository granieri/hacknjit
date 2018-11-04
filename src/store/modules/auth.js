import axios from 'axios'

let url = 'http://localhost:8081'

const state = {
  logged_in: false,
  user: null
}

const mutations = {
  LOG_IN_M (state) {
    state.logged_in = true
  },
  LOG_OUT_M (state) {
    state.logged_in = false
  },
  SET_USER_M (state, new_user) {
    state.user = new_user
  }
}

const getters = {
  get_logged_in(state){
    return state.logged_in
  },
  get_user(state){
    return state.user
  }
}

const actions = {
  log_in ({ commit }) {
    commit('LOG_IN_M')
  },
  log_out ({ commit }) {
    commit('LOG_OUT_M')
  },
  set_user ({ commit }, user) {
    axios.get(url+'/checkuser/'+user.id)
      .then((response) => {
        if(!response){
          axios.get(url+'/insertuser/'+user.id+'/'+user.firstname+'/'+user.lastname+'/'+user.email)
            // error handling
        }
      commit('SET_USER_ID_M', user)
    })
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
