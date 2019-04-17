import types from './counter.types'
const INITIAL_STATE = 0

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.INCREASE:
      return state + 1
    default:
      return state
  }
}
