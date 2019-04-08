import {
  login
} from '../../api/login'

const state = {
  isLogin: false,
  token: ''

}

const mutations = {
  setToken (state, token) {
    state.isLogin = true
    state.token = token
  }
}

const actions = {
  loginPost ({
    commit
  }, msg) {
    return login(msg).then(data => {
      commit('setToken', data.data.token)
      return data
    })
  }
}

export default {
  state,
  mutations,
  actions
}
