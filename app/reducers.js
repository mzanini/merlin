import { CREATE_CHARACTER, CREATE_GAME, SELECT_GAME, CHANGE_NEW_GAME_NAME, SHOW_NEW_GAME_PAGE, TOGGLE_DRAWER, SHOW_GAME_LIST } from './actionTypes'

const initialState = {
  newGamePage: false,
  drawerOpen: false,
  newGameName: '',
  games: []
}

function myReducer(state, action) {
  switch(action.type) {
    case CREATE_CHARACTER:
      return { ...state, characters: [...state.characters, action.character] }
    case CREATE_GAME:
      const newGame = {name: action.name}
      return { ...state, games: [...state.games, newGame], newGamePage:false }
    case SELECT_GAME:
      return { ...state, selectedGame: action.gameId }
    case CHANGE_NEW_GAME_NAME:
      return { ...state, newGameName: action.newGameName }
    case SHOW_NEW_GAME_PAGE:
      return { ...state, newGamePage: true }
    case SHOW_GAME_LIST:
      return { ...state, newGamePage: false, selectedGame: null }
    case TOGGLE_DRAWER:
      return { ...state, drawerOpen: action.drawerOpen }
    default:
      return initialState
  }
}

export default myReducer