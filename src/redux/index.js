import { createStore, applyMiddleware, compose } from 'redux'
import middl from './counter/counter.middleware'
import rootReducer from './rootReducer'
// import rootSaga from './rootSaga'

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = applyMiddleware(...middl)

export const store = createStore(rootReducer, composeEnhancers(middlewares))
