import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import myReducer from './reducers'

export const initialState = {
  games: [],
  characters: [],
  ui: {
    drawerOpen: false,
    newCharacterPage: false,
    newCharacterName: ''
  }
}

const store = createStore(
  myReducer,
  initialState,
  compose(applyMiddleware(thunk))
)

export default store