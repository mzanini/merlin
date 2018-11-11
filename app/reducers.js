import {
  CREATE_CHARACTER,
  CREATE_GAME,
  SELECT_GAME,
  LOAD_GAMES,
  TOGGLE_DRAWER,
  SHOW_GAME_PAGE,
  SHOW_GAME_LIST,
  DELETE_GAME,
  LOAD_CHARACTERS,
  OPEN_SETTINGS,
  DELETE_CHARACTER,
  UPDATE_CHARACTER,
  SHOW_CHARACTER_EDIT,
  CLOSE_CHARACTER_EDIT,
  INITIALIZE_RACES } from './actionTypes'
import { combineReducers } from 'redux'

export const GAME_PAGE_CHARACTERS = 'characters'
export const GAME_PAGE_ROLL = 'roll'

export const initialState = {
  games: [],
  characters: [],
  races: {
    table: [],
    tablePath: '',
  },
  ui: {
    drawerOpen: false,
    selectedGameId: null,
    gamePage: GAME_PAGE_CHARACTERS,
    settingsOpen: false,
    selectedCharacterId: null,
    selectingTables: false,
  },
}

function ui(state = initialState.ui, action) {
  switch (action.type) {
    case SELECT_GAME:
      return { ...state, selectedGameId: action.gameId }
    case SHOW_GAME_LIST:
      return { ...state, selectedGameId: null, settingsOpen: false }
    case TOGGLE_DRAWER:
      return { ...state, drawerOpen: action.drawerOpen }
    case SHOW_GAME_PAGE:
      return { ...state, gamePage: action.payload, settingsOpen: false }
    case OPEN_SETTINGS:
      return { ...state, settingsOpen: true }
    case SHOW_CHARACTER_EDIT:
      return { ...state, selectedCharacterId: action.payload }
    case CLOSE_CHARACTER_EDIT:
      return { ...state, selectedCharacterId: null }
    default:
      return state
  }
}

function games(state = initialState.games, action) {
  switch (action.type) {
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

function characters(state = initialState.characters, action) {
  switch (action.type) {
    case CREATE_CHARACTER:
      return [...state, action.payload]
    case DELETE_CHARACTER:
      return state = state.filter((character) => character.id !== action.payload)
    case UPDATE_CHARACTER: {
      const characterToUpdate = state.find((character) => character.id === action.payload.id)
      return [
        ...state.filter((character) => character.id !== action.payload.id),
        Object.assign({}, characterToUpdate, action.payload.newCharacter),
      ]
    }
    case LOAD_CHARACTERS:
      return state = action.payload
    default:
      return state
  }
}

function races(state = initialState.races, action) {
  switch (action.type) {
    case INITIALIZE_RACES:
      return { ...state, table: action.payload.table, tablePath: action.payload.tablePath }
    default:
      return state
  }
}

const myReducer = combineReducers({
  ui,
  games,
  characters,
  races,
})

export default myReducer
