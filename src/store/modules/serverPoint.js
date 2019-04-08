import {
  getPoint,
  createPoint,
  pointDetail,
  updatePoint,
  getPointBicycles,
  addBicycles
} from '../../api/serverPoint'

const state = {

}

const mutations = {

}

const actions = {
  serverGet ({
    commit
  }, msg) {
    return getPoint(msg).then(data => {
      return data
    })
  },
  pointCreate ({
    commit
  }, msg) {
    return createPoint(msg).then(data => {
      return data
    })
  },
  getPointDetail ({
    commit
  }, msg) {
    return pointDetail(msg).then(data => {
      return data
    })
  },
  pointUpdate ({
    commit
  }, msg) {
    return updatePoint(msg).then(data => {
      return data
    })
  },
  pointBicycle ({
    commit
  }, msg) {
    return getPointBicycles(msg).then(data => {
      return data
    })
  },
  pointAddBicycle ({
    commit
  }, msg) {
    return addBicycles(msg).then(data => {
      return data
    })
  }
}

export default {
  state,
  mutations,
  actions
}
