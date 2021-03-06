import {
  SELECT_GAME,
  TOGGLE_DRAWER,
  SHOW_GAME_PAGE,
  SHOW_GAME_LIST,
  OPEN_SETTINGS,
  CLOSE_SETTINGS,
  MARK_ONBOARDING_AS_COMPLETE,
  SHOW_CHARACTER_EDIT,
  CLOSE_CHARACTER_EDIT,
  SET_RACES_TABLE_PATH,
  SET_SOCIAL_CLASSES_TABLE_PATH,
  SET_MINOR_ABILITIES_TABLE_PATH,
  LOAD_UI_SETTING,
} from '../actionTypes'

export const GAME_PAGE_CHARACTERS = 'characters'
export const GAME_PAGE_ROLL = 'roll'

export const initialState = {
  drawerOpen: false,
  selectedGameId: null,
  gamePage: GAME_PAGE_CHARACTERS,
  settingsOpen: false,
  selectedCharacterId: null,
  racesTablePath: '',
  socialClassesTablePath: '',
  minorAbilitiesTablePath: '',
  onBoardingCompleted: false,
}

export default function ui(state = initialState, action) {
  switch (action.type) {
    case SELECT_GAME:
      return { ...state, selectedGameId: action.gameId }
    case SHOW_GAME_LIST:
      return { ...state, selectedGameId: null, settingsOpen: false }
    case TOGGLE_DRAWER:
      return { ...state, drawerOpen: action.drawerOpen }
    case SHOW_GAME_PAGE:
      return { ...state, gamePage: action.payload, settingsOpen: false }
    case OPEN_SETTINGS:
      return { ...state, settingsOpen: true }
    case CLOSE_SETTINGS:
      return { ...state, settingsOpen: false }
    case MARK_ONBOARDING_AS_COMPLETE:
      return { ...state, onBoardingCompleted: true }
    case SHOW_CHARACTER_EDIT:
      return { ...state, selectedCharacterId: action.payload }
    case CLOSE_CHARACTER_EDIT:
      return { ...state, selectedCharacterId: null }
    case SET_RACES_TABLE_PATH:
      return { ...state, racesTablePath: action.payload }
    case SET_SOCIAL_CLASSES_TABLE_PATH:
      return { ...state, socialClassesTablePath: action.payload }
    case SET_MINOR_ABILITIES_TABLE_PATH:
      return { ...state, minorAbilitiesTablePath: action.payload }
    case LOAD_UI_SETTING:
      if (state.hasOwnProperty(action.payload.name)) {
        let newPropertyValue = {}
        newPropertyValue[action.payload.name] = action.payload.value
        return { ...state, ...newPropertyValue }
      }
      // fallsthrough
    default:
      return state
  }
}
