import * as types from '../mutations'
const state = {
  data: {
    author: '',
    replies: ''
  }
}
const mutations = {
  [types.UPDATETOPIC] (state, topic) {
    for (let comm of topic.data.replies) {
      for (let key in comm.author) {
        console.log(key + '----' + comm.author[key])
      }
    }
    state.data = topic.data
  }
}
export default {
  state,
  mutations
}
