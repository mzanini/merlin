import { CREATE_GAME, SELECT_GAME, SHOW_NEW_GAME_PAGE, CHANGE_NEW_GAME_NAME, CHANGE_NEW_CHARACTER_NAME, TOGGLE_DRAWER, SHOW_GAME_LIST, CREATE_CHARACTER, SHOW_CREATE_CHARACTER_PAGE } from './actionTypes'

export function createCharacter(name) {
  return { type: CREATE_CHARACTER, name: name }
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

export function showCreateCharacterPage() {
  return { type: SHOW_CREATE_CHARACTER_PAGE }
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

export function changeNewCharacterName(name) {
  return { type: CHANGE_NEW_CHARACTER_NAME, newCharacterName: name }
}