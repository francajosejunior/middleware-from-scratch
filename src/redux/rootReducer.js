import { combineReducers } from 'redux'

const modules = {}
const context = require.context('./', true, /.reducer\.js$/) // carrega reducers de todos os componentes

context.keys().forEach(filename => {
  const arr = filename.split('/')
  const key = arr[arr.length - 2]
  const ctx = context(filename)
  if (ctx.default) {
    modules[key] = ctx.default
  }
})

export default combineReducers({ ...modules })
