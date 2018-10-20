import React from 'react'
import PropTypes from 'prop-types'
import CharacterNameInput from '../containers/CharacterNameInput'
import GameCharactersList from '../containers/GameCharactersList'
import ActiveBottomNavigation from '../containers/ActiveBottomNavigation'
import RollPage from './RollPage'
import { GAME_PAGE_ROLL } from '../reducers'

const GamePage = ({ showPage }) => {
  let actualPage = (
    <React.Fragment>
      <GameCharactersList/>
      <CharacterNameInput/>
    </React.Fragment>
  )
  if (showPage === GAME_PAGE_ROLL)
    actualPage = <RollPage/>

  return (
    <React.Fragment>
      { actualPage }
      <ActiveBottomNavigation/>
    </React.Fragment>
  )
}

GamePage.propTypes = {
  showPage: PropTypes.string
}

export default GamePage
