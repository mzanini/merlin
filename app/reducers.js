import {
  CREATE_CHARACTER,
  CREATE_GAME,
  SELECT_GAME,
  LOAD_GAMES,
  TOGGLE_DRAWER,
  SHOW_GAME_LIST,
  DELETE_GAME,
  LOAD_CHARACTERS } from './actionTypes'
import { combineReducers } from 'redux'

export const initialState = {
  games: [],
  characters: [],
  ui: {
    drawerOpen: false,
    selectedGameId: null
  }
}

function ui(state=initialState.ui, action){
  switch(action.type){
    case SELECT_GAME:
      return { ...state, selectedGameId: action.gameId }
    case SHOW_GAME_LIST:
      return { ...state, selectedGameId: null }
    case TOGGLE_DRAWER:
      return { ...state, drawerOpen: action.drawerOpen }
    default:
      return state
  }
}

function games(state=initialState.games, action){
  switch(action.type){
    case LOAD_GAMES:
      return state = action.payload
    case CREATE_GAME:
      return [...state, action.payload]
    case DELETE_GAME:
      return state = state.filter((game) => game.id !== action.payload)
    default:
      return state
  }
}

function characters(state=initialState.characters, action){
  switch(action.type) {
    case CREATE_CHARACTER:
      return [...state, action.payload]
    case LOAD_CHARACTERS:
      return state = action.payload
    default:
      return state
  }
}

const myReducer = combineReducers({
  ui,
  games,
  characters
})

export default myReducer