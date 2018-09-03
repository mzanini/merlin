import { ADD_CHARACTER, CREATE_GAME, SELECT_GAME, SHOW_NEW_GAME_PAGE } from './actionTypes'

export function createCharacter(newCharacter) {
  return { type: ADD_CHARACTER, character: newCharacter }
}

export function createGame(newGame) {
  return { type: CREATE_GAME, game: newGame }
}

export function selectGame(gameId) {
  return { type: SELECT_GAME, gameId: gameId }
}

export function showNewGamePage() {
  return { type: SHOW_NEW_GAME_PAGE, createNewGamePage: true }
}