import {
  CREATE_CHARACTER,
  CREATE_GAME,
  LOAD_GAMES,
  DELETE_GAME,
  LOAD_CHARACTERS,
  DELETE_CHARACTER,
  UPDATE_CHARACTER,
  CREATE_RACE,
  CREATE_SOCIAL_CLASS,
  CREATE_MINOR_ABILITY,
  LOAD_RACES,
  LOAD_SOCIAL_CLASSES,
  LOAD_MINOR_ABILITIES,
  DESTROY_ALL_RACES } from '../actionTypes'
import { combineReducers } from 'redux'
import ui from './ui'

export const initialState = {
  games: [],
  characters: [],
  races: [],
  socialClasses: [],
  minorAbilities: [],
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
    case LOAD_RACES:
      return state = action.payload
    case CREATE_RACE:
      return [...state, action.payload]
    case DESTROY_ALL_RACES:
      return initialState.races
    default:
      return state
  }
}

function socialClasses(state = initialState.socialClasses, action) {
  switch (action.type) {
    case LOAD_SOCIAL_CLASSES:
      return state = action.payload
    case CREATE_SOCIAL_CLASS:
      return [...state, action.payload]
    default:
      return state
  }
}

function minorAbilities(state = initialState.minorAbilities, action) {
  switch (action.type) {
    case LOAD_MINOR_ABILITIES:
      return state = action.payload
    case CREATE_MINOR_ABILITY:
      return [...state, action.payload]
    default:
      return state
  }
}

const myReducer = combineReducers({
  ui,
  games,
  characters,
  races,
  socialClasses,
  minorAbilities,
})

export default myReducer
