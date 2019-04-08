import {
  getOrderList
} from '../../api/order'

const state = {

}

const mutations = {

}

const actions = {
  orderList ({
    commit
  }, msg) {
    return getOrderList(msg).then(data => {
      return data
    })
  }
}

export default {
  state,
  mutations,
  actions
}
