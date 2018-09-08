import {
  CREATE_GAME,
  SELECT_GAME,
  LOAD_GAMES,
  CHANGE_NEW_CHARACTER_NAME,
  TOGGLE_DRAWER,
  SHOW_GAME_LIST,
  CREATE_CHARACTER,
  SHOW_CREATE_CHARACTER_PAGE } from './actionTypes'
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
  return { type: CREATE_CHARACTER, name: name }
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

export function addTodo(title) {

}

export function selectGame(gameId) {
  return { type: SELECT_GAME, gameId: gameId }
}

export function showCreateCharacterPage() {
  return { type: SHOW_CREATE_CHARACTER_PAGE }
}

export function showGameList() {
  return { type: SHOW_GAME_LIST }
}

export function toggleDrawer(drawerOpen) {
  return { type: TOGGLE_DRAWER, drawerOpen: drawerOpen }
}

export function changeNewCharacterName(name) {
  return { type: CHANGE_NEW_CHARACTER_NAME, newCharacterName: name }
}