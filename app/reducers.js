import {
  CREATE_CHARACTER,
  CREATE_GAME,
  SELECT_GAME,
  LOAD_GAMES,
  TOGGLE_DRAWER,
  SHOW_GAME_LIST,
  SHOW_CREATE_CHARACTER_PAGE,
  CHANGE_NEW_CHARACTER_NAME } from './actionTypes'
import { initialState } from './store';

function myReducer(state = initialState, action) {
  switch(action.type) {
    case LOAD_GAMES:
      return { ...state, games: action.payload }
    case CREATE_CHARACTER:
      const newCharacter = {name: action.name}
      return { ...state, characters: [...state.characters, newCharacter], newCharacterPage: false }
    case CREATE_GAME:
      return { ...state, games: [...state.games, action.payload], newGamePage:false }
    case SELECT_GAME:
      return { ...state, selectedGame: action.gameId }
    case CHANGE_NEW_CHARACTER_NAME:
      return { ...state, newCharacterName: action.newCharacterName }
    case SHOW_GAME_LIST:
      return { ...state, newGamePage: false, selectedGame: null }
    case SHOW_CREATE_CHARACTER_PAGE:
      return { ...state, newCharacterPage: true }
    case TOGGLE_DRAWER:
      return { ...state, drawerOpen: action.drawerOpen }
    default:
      return state
  }
}

export default myReducer