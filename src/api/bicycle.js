import {
  fetch
} from '../utils/http'

export function createBicycle (data) {
  return fetch({
    url: '/bicycles/',
    method: 'post',
    data: data
  })
}

export function getBicycleList (params = {}) {
  return fetch({
    url: '/bicycles',
    method: 'get',
    params
  })
}

export function updateBicycle (data) {
  return fetch({
    url: `/bicycles/${data.id}`,
    method: 'post',
    data: data.msg
  })
}
