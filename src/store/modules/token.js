const state = {
  token: '123123'
}

const getters = {
  getToken (state) {
    return state.token
  }
}

const mutations = {
  SET_TOKEN (state, args) {
    state.token = args
  }
}

const actions = {
  asyncToken ({commit}, args) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('SET_TOKEN', args)
        resolve(state.token)
      }, 100)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}