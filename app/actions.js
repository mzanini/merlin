import {
  CREATE_GAME,
  SELECT_GAME,
  LOAD_GAMES,
  TOGGLE_DRAWER,
  SHOW_GAME_LIST,
  CREATE_CHARACTER } from './actionTypes'
import db from './db'

export function loadGames() {
  return (dispatch) => {
    db.table('games')
      .toArray()
      .then((games) => {
        dispatch({
          type: LOAD_GAMES,
          payload: games,
        })
      })
  }
}

export function createCharacter(name) {
  return (dispatch) => {
    const characterToAdd = { name }
    db.table('characters')
      .add(characterToAdd)
      .then((id) => {
         dispatch({
           type: CREATE_CHARACTER,
           payload: Object.assign({}, characterToAdd, { id }),
         });
      });
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
           payload: Object.assign({}, gameToAdd, { id }),
         });
      });
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