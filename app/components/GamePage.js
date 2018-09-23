import React from 'react'
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
  console.log(GAME_PAGE_ROLL)
  if(showPage === GAME_PAGE_ROLL)
    actualPage = <RollPage/>

  return (
    <React.Fragment>
      { actualPage }
      <ActiveBottomNavigation/>
    </React.Fragment>
  )
}

export default GamePage