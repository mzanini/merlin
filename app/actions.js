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
  DELETE_CHARACTER } from './actionTypes'
import db from './db'

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
    const characterToAdd = { name, game: gameId }
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

export function openSettings() {
  return { type: OPEN_SETTINGS }
}
