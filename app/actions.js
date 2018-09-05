import { ADD_CHARACTER, CREATE_GAME, SELECT_GAME, SHOW_NEW_GAME_PAGE, CHANGE_NEW_GAME_NAME, TOGGLE_DRAWER, SHOW_GAME_LIST } from './actionTypes'

export function createCharacter(newCharacter) {
  return { type: ADD_CHARACTER, character: newCharacter }
}

export function createGame(name) {
  return { type: CREATE_GAME, name: name }
}

export function selectGame(gameId) {
  return { type: SELECT_GAME, gameId: gameId }
}

export function showNewGamePage() {
  return { type: SHOW_NEW_GAME_PAGE, newGamePage: true }
}

export function showGameList() {
  return { type: SHOW_GAME_LIST }
}

export function toggleDrawer(drawerOpen) {
  return { type: TOGGLE_DRAWER, drawerOpen: drawerOpen }
}

export function changeNewGameName(gameName) {
  return { type: CHANGE_NEW_GAME_NAME, newGameName: gameName }
}