import {
  CREATE_GAME,
  SELECT_GAME,
  LOAD_GAMES,
  DELETE_GAME,
  TOGGLE_DRAWER,
  SHOW_GAME_LIST,
  CREATE_CHARACTER,
  LOAD_CHARACTERS,
  SHOW_GAME_PAGE,
  OPEN_SETTINGS,
  DELETE_CHARACTER,
  UPDATE_CHARACTER,
  SHOW_CHARACTER_EDIT,
  CLOSE_CHARACTER_EDIT } from './actionTypes'
import db from './db'
import { rollFourSixSidedDie } from './utils'

export function loadGames() {
  return (dispatch) => {
    db.table('games')
      .toArray()
      .then((games) => {
        dispatch({
          type: LOAD_GAMES,
          payload: games
        })
      })
  }
}

export function loadCharacters() {
  return (dispatch) => {
    db.table('characters')
      .toArray()
      .then((characters) => {
        dispatch({
          type: LOAD_CHARACTERS,
          payload: characters
        })
      })
  }
}

export function deleteGame(id) {
  return (dispatch) => {
    db.table('games')
      .delete(id)
      .then(() => {
        dispatch({
          type: DELETE_GAME,
          payload: id
        })
      })
  }
}

export function createCharacter(name, gameId) {
  return (dispatch) => {
    let characterToAdd = { name, game: gameId }
    characterToAdd.strength = rollFourSixSidedDie()
    characterToAdd.intelligence = rollFourSixSidedDie()
    characterToAdd.wisdom = rollFourSixSidedDie()
    characterToAdd.constitution = rollFourSixSidedDie()
    characterToAdd.dexterity = rollFourSixSidedDie()
    characterToAdd.charisma = rollFourSixSidedDie()

    db.table('characters')
      .add(characterToAdd)
      .then((id) => {
        dispatch({
          type: CREATE_CHARACTER,
          payload: Object.assign({}, characterToAdd, { id })
        })
      })
  }
}

export function deleteCharacter(id) {
  return (dispatch) => {
    db.table('characters')
      .delete(id)
      .then(() => {
        dispatch({
          type: DELETE_CHARACTER,
          payload: id
        })
      })
  }
}

export function updateCharacter(id, newCharacter) {
  return (dispatch) => {
    db.table('characters')
      .update(id, newCharacter)
      .then(() => {
        dispatch({
          type: UPDATE_CHARACTER,
          payload: { id, newCharacter }
        })
      })
  }
}

export function createGame(name) {
  return (dispatch) => {
    const gameToAdd = { name }
    db.table('games')
      .add(gameToAdd)
      .then((id) => {
        dispatch({
          type: CREATE_GAME,
          payload: Object.assign({}, gameToAdd, { id })
        })
      })
  }
}

export function selectGame(gameId) {
  return { type: SELECT_GAME, gameId: gameId }
}

export function showGameList() {
  return { type: SHOW_GAME_LIST }
}

export function toggleDrawer(drawerOpen) {
  return { type: TOGGLE_DRAWER, drawerOpen: drawerOpen }
}

export function showGamePage(newGamePage) {
  return { type: SHOW_GAME_PAGE, payload: newGamePage }
}

export function showCharacterEditModal(id) {
  return { type: SHOW_CHARACTER_EDIT, payload: id }
}

export function closeCharacterEditModal() {
  return { type: CLOSE_CHARACTER_EDIT }
}

export function openSettings() {
  return { type: OPEN_SETTINGS }
}
