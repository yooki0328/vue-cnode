import * as types from '../mutations'
const state = {
  data: ''
}
const mutations = {
  [types.UPDATETOPIC] (state, topic) {
    for (var key in topic.data) {
      console.log(key + '-----' + topic.data[key])
    }
    state.data = topic.data
  }
}
export default {
  state,
  mutations
}
