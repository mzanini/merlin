import ADD_CHARACTER, { CREATE_GAME } from './actionTypes'

export function createCharacter(newCharacter) {
  return { type: ADD_CHARACTER, character: newCharacter }
}

export function createGame(newGame) {
  return { type: CREATE_GAME, game: newGame}
}