import { CREATE_CHARACTER, CREATE_GAME, SELECT_GAME } from './actionTypes'
import { combineReducers } from 'redux'

function characters(state = [], action) {
  switch(action.type) {
    case CREATE_CHARACTER:
      return { ...state, characters: [...state.characters, action.character] }
    default:
      return state
  }
}

function games(state = [], action) {
  switch(action.type) {
    case CREATE_GAME:
      return { ...state, games: [...state.games, action.game] }
    case SELECT_GAME:
      return { ...state, selectedGame: action.gameId }
    default:
      return state
  }
}

const myReducer = combineReducers({
  characters,
  games
})

export default myReducer