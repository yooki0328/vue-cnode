import * as types from '../mutations'
const state = {
  datas: []
}
const mutations = {
  [types.UPDATEDATAS] (state, datas) {
    state.datas = datas
  }
}
export default{
  state,
  mutations
}
