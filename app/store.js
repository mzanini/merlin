import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import myReducer, {initialState} from './reducers'

const store = createStore(
  myReducer,
  initialState,
  compose(applyMiddleware(thunk))
)

export default store