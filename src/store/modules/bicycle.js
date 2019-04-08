import {
  getBicycleList,
  createBicycle,
  updateBicycle
} from '../../api/bicycle'

const state = {

}

const mutations = {

}

const actions = {
  bicycleList ({
    commit
  }, msg) {
    return getBicycleList(msg).then(data => {
      return data
    })
  },
  bicycleCreate ({
    commit
  }, msg) {
    return createBicycle(msg).then(data => {
      return data
    })
  },
  updateBicycle ({
    commit
  }, msg) {
    return updateBicycle(msg).then(data => {
      return data
    })
  }
}

export default {
  state,
  mutations,
  actions
}
