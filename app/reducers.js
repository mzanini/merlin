import { CREATE_CHARACTER, CREATE_GAME, SELECT_GAME, CHANGE_NEW_GAME_NAME, SHOW_NEW_GAME_PAGE, TOGGLE_DRAWER, SHOW_GAME_LIST, SHOW_CREATE_CHARACTER_PAGE, CHANGE_NEW_CHARACTER_NAME } from './actionTypes'

const initialState = {
  newGamePage: false,
  drawerOpen: false,
  newCharacterPage: false,
  newGameName: '',
  newCharacterName: '',
  games: [],
  characters: []
}

function myReducer(state, action) {
  switch(action.type) {
    case CREATE_CHARACTER:
      const newCharacter = {name: action.name}
      return { ...state, characters: [...state.characters, newCharacter], newCharacterPage: false }
    case CREATE_GAME:
      const newGame = {name: action.name}
      return { ...state, games: [...state.games, newGame], newGamePage:false }
    case SELECT_GAME:
      return { ...state, selectedGame: action.gameId }
    case CHANGE_NEW_GAME_NAME:
      return { ...state, newGameName: action.newGameName }
    case CHANGE_NEW_CHARACTER_NAME:
      return { ...state, newCharacterName: action.newCharacterName }
    case SHOW_NEW_GAME_PAGE:
      return { ...state, newGamePage: true }
    case SHOW_GAME_LIST:
      return { ...state, newGamePage: false, selectedGame: null }
    case SHOW_CREATE_CHARACTER_PAGE:
      return { ...state, newCharacterPage: true }
    case TOGGLE_DRAWER:
      return { ...state, drawerOpen: action.drawerOpen }
    default:
      return initialState
  }
}

export default myReducer