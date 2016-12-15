import * as types from '../mutations'
const state = {
  data: {
    author: ''
  }
}
const mutations = {
  [types.UPDATETOPIC] (state, topic) {
    for (let key in topic.data) {
      console.log(key + '------' + topic.data[key])
    }
    state.data = topic.data
  }
}
export default {
  state,
  mutations
}
