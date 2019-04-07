import React from 'react'
import PropTypes from 'prop-types'
import CharacterNameInput from '../containers/CharacterNameInput'
import GameCharactersList from '../containers/GameCharactersList'
import ActiveBottomNavigation from '../containers/ActiveBottomNavigation'
import CharacterEdit from '../containers/CharacterEdit'
import RollPage from './RollPage'
import { GAME_PAGE_ROLL } from '../reducers/ui'

const GamePage = ({ showPage, isCharacterEditOpen }) => {
  let actualPage = (
    <React.Fragment>
      { isCharacterEditOpen ? <CharacterEdit/> : null }
      <GameCharactersList/>
      <CharacterNameInput/>
    </React.Fragment>
  )
  if (showPage === GAME_PAGE_ROLL) {
    actualPage = <RollPage/>
  }

  return (
    <React.Fragment>
      { actualPage }
      <ActiveBottomNavigation/>
    </React.Fragment>
  )
}

GamePage.propTypes = {
  showPage: PropTypes.string,
  isCharacterEditOpen: PropTypes.bool,
}

export default GamePage
