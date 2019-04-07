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
  DELETE_CHARACTER,
  UPDATE_CHARACTER,
  SHOW_CHARACTER_EDIT,
  CLOSE_CHARACTER_EDIT,
  CREATE_RACE,
  SET_RACES_TABLE_PATH,
  CREATE_SOCIAL_CLASS,
  SET_SOCIAL_CLASSES_TABLE_PATH,
  CREATE_MINOR_ABILITY,
  SET_MINOR_ABILITIES_TABLE_PATH,
  LOAD_RACES,
  LOAD_SOCIAL_CLASSES,
  LOAD_MINOR_ABILITIES,
  DESTROY_ALL_RACES,
  DESTROY_ALL_SOCIAL_CLASSES } from './actionTypes'
import db from './db'
import fs from 'fs'
import { rollFourSixSidedDie } from './utils'

function loadTable(fileName) {
  const payload = {
    table: JSON.parse(fs.readFileSync(fileName)),
    tablePath: fileName,
  }
  return payload
}

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

export function loadCharacters() {
  return (dispatch) => {
    db.table('characters')
      .toArray()
      .then((characters) => {
        dispatch({
          type: LOAD_CHARACTERS,
          payload: characters,
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
          payload: id,
        })
      })
  }
}

export function createCharacter(name, gameId) {
  return (dispatch) => {
    let characterToAdd = { name, game: gameId }
    characterToAdd.strength = rollFourSixSidedDie()
    characterToAdd.intelligence = rollFourSixSidedDie()
    characterToAdd.wisdom = rollFourSixSidedDie()
    characterToAdd.constitution = rollFourSixSidedDie()
    characterToAdd.dexterity = rollFourSixSidedDie()
    characterToAdd.charisma = rollFourSixSidedDie()

    db.table('characters')
      .add(characterToAdd)
      .then((id) => {
        dispatch({
          type: CREATE_CHARACTER,
          payload: Object.assign({}, characterToAdd, { id }),
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
          payload: id,
        })
      })
  }
}

export function updateCharacter(id, newCharacter) {
  return (dispatch) => {
    db.table('characters')
      .update(id, newCharacter)
      .then(() => {
        dispatch({
          type: UPDATE_CHARACTER,
          payload: { id, newCharacter },
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
          payload: Object.assign({}, gameToAdd, { id }),
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

export function showCharacterEditModal(id) {
  return { type: SHOW_CHARACTER_EDIT, payload: id }
}

export function closeCharacterEditModal() {
  return { type: CLOSE_CHARACTER_EDIT }
}

export function openSettings() {
  return { type: OPEN_SETTINGS }
}

export function loadRaces() {
  return (dispatch) => {
    db.table('races')
      .toArray()
      .then((races) => {
        dispatch({
          type: LOAD_RACES,
          payload: races,
        })
      })
  }
}

export function loadRacesTable(fileName) {
  if (typeof (fileName) !== 'string') {
    return
  }
  return (dispatch) => {
    const payload = loadTable(fileName)
    dispatch(destroyAllRaces())
    payload.table.forEach((row) => {
      dispatch(createRace(row.name, row.probability))
    })
    dispatch(setRacesTablePath(fileName))
  }
}

export function createRace(name, probability) {
  return (dispatch) => {
    let raceToAdd = { name, probability }
    db.table('races')
      .add(raceToAdd)
      .then((id) => {
        dispatch({
          type: CREATE_RACE,
          payload: Object.assign({}, raceToAdd, { id }),
        })
      })
  }
}

export function destroyAllRaces() {
  return (dispatch) => {
    db.races
      .clear()
      .then(() => { dispatch({ type: DESTROY_ALL_RACES }) })
  }
}

export function destroyAllSocialClasses() {
  return (dispatch) => {
    db.socialClasses
      .clear()
      .then(() => { dispatch({ type: DESTROY_ALL_SOCIAL_CLASSES }) })
  }
}

export function setRacesTablePath(fileName) {
  return { type: SET_RACES_TABLE_PATH, payload: fileName }
}

export function loadSocialClasses() {
  return (dispatch) => {
    db.table('socialClasses')
      .toArray()
      .then((socialClasses) => {
        dispatch({
          type: LOAD_SOCIAL_CLASSES,
          payload: socialClasses,
        })
      })
  }
}

export function createSocialClass(raceName, name, probability) {
  return (dispatch) => {
    let socialClassToAdd = { raceName, name, probability }
    db.table('socialClasses')
      .add(socialClassToAdd)
      .then((id) => {
        dispatch({
          type: CREATE_SOCIAL_CLASS,
          payload: Object.assign({}, socialClassToAdd, { id }),
        })
      })
  }
}

export function loadSocialClassesTable(fileName) {
  if (typeof (fileName) !== 'string') {
    return
  }
  return (dispatch) => {
    const payload = loadTable(fileName)
    dispatch(destroyAllSocialClasses())
    payload.table.forEach((row) => {
      row.probabilities.forEach((socialClass) => {
        dispatch(createSocialClass(row.race, socialClass.name, socialClass.probability))
      })
    })
    dispatch(setSocialClassesTablePath(fileName))
  }
}

export function setSocialClassesTablePath(fileName) {
  return { type: SET_SOCIAL_CLASSES_TABLE_PATH, payload: fileName }
}

export function loadMinorAbilities() {
  return (dispatch) => {
    db.table('minorAbilities')
      .toArray()
      .then((minorAbilities) => {
        dispatch({
          type: LOAD_MINOR_ABILITIES,
          payload: minorAbilities,
        })
      })
  }
}

export function createMinorAbility(chart, probability, name, number) {
  return (dispatch) => {
    let minorAbilityToAdd = { chart, probability, name, number }
    db.table('minorAbilities')
      .add(minorAbilityToAdd)
      .then((id) => {
        dispatch({
          type: CREATE_MINOR_ABILITY,
          payload: Object.assign({}, minorAbilityToAdd, { id }),
        })
      })
  }
}

export function loadMinorAbilitiesTable(fileName) {
  if (typeof (fileName) !== 'string') {
    return
  }
  return (dispatch) => {
    const payload = loadTable(fileName)
    payload.table.forEach((row) => {
      row.abilities.forEach((ability) => {
        dispatch(createMinorAbility(row.chart, row.probability, ability.name, ability.number))
      })
    })
    dispatch(setMinorAbilitiesTablePath(fileName))
  }
}

export function setMinorAbilitiesTablePath(fileName) {
  return { type: SET_MINOR_ABILITIES_TABLE_PATH, payload: fileName }
}
