import {
  fetch
} from '../utils/http'

export function getPoint (params = {}) {
  return fetch({
    url: '/servicePoints/',
    method: 'get',
    params
  })
}

export function createPoint (data) {
  return fetch({
    url: '/servicePoints/',
    method: 'post',
    data: data
  })
}

export function pointDetail (data) {
  return fetch({
    url: `/servicePoints/${data}`,
    method: 'get'
  })
}

export function updatePoint (data) {
  return fetch({
    url: `/servicePoints/${data.id}`,
    method: 'post',
    data: data.msg
  })
}

export function getPointBicycles (data) {
  return fetch({
    url: `/servicePoints/${data.id}/bicycles`,
    method: 'get'
  })
}

export function addBicycles (data) {
  return fetch({
    url: `/servicePoints/${data.id}/add`,
    method: 'post',
    data: data.msg
  })
}
