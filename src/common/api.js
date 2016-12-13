const apiUrl = 'http://cnodejs.org/api/v1'
let config = {
  topics: '/topics',
  topic: '/topic/'
}
function addPrestr (data, prestr) {
  for (let key in data) {
    if (typeof data[key] === 'object') {
      addPrestr(data[key], prestr)
    } else {
      data[key] = prestr + data[key]
    }
  }
}
function deepCopy (target, source) {
  for (let key in source) {
    if (typeof source[key] === 'object') {
      target[key] = {}
      deepCopy(target[key], source[key])
    } else {
      target[key] = source[key]
    }
  }
}
export const getApi = () => {
  let _config = {}
  deepCopy(_config, config)
  addPrestr(_config, apiUrl)
  return _config
}
