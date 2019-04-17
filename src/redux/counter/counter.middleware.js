const increase = ({ dispatch }) => next => action => {
  next(action)
  console.log({ dispatch, acton: action, next })
}

export default [increase]
