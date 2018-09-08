import {
  CREATE_CHARACTER,
  CREATE_GAME,
  SELECT_GAME,
  LOAD_GAMES,
  TOGGLE_DRAWER,
  SHOW_GAME_LIST } from './actionTypes'
import { combineReducers } from 'redux'

export const initialState = {
  games: [],
  characters: [],
  ui: {
    drawerOpen: false,
    selectedGame: null
  }
}

function ui(state=initialState.ui, action){
  switch(action.type){
    case SELECT_GAME:
      return { ...state, selectedGame: action.gameId }
    case SHOW_GAME_LIST:
      return { ...state, selectedGame: null }
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
    default:
      return state
  }
}

function characters(state=initialState.characters, action){
  switch(action.type) {
    case CREATE_CHARACTER:
      return [...state, action.payload]
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