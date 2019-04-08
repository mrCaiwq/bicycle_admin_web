import {
  fetch
} from '../utils/http'

export function getOrderList (params = {}) {
  return fetch({
    url: '/orders/',
    methods: 'get',
    params
  })
}
