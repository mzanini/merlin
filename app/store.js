import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import myReducer, { initialState } from './reducers/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  myReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk)),
)

export default store
