import * as types from './mutations'
import { getApi } from 'src/common/api'
import 'whatwg-fetch'
export const getDatas = ({commit}, options) => {
  var url = getApi().topics
  if (options.tab !== '') {
    var query = Object.keys(options).map(k => k + '=' + encodeURIComponent(options[k])).join('&')
    url = url + '?' + query
  }
  global.fetch(url).then((res) => {
    return res.json()
  }).then((data) => {
    commit(types.UPDATEDATAS, data.data)
  })
}
export const getTopic = ({commit}, id) => {
  let url = getApi().topic + id
  console.log(getApi())
  global.fetch(url).then((res) => {
    return res.json()
  }).then((data) => {
    commit(types.UPDATETOPIC, data)
  })
}
