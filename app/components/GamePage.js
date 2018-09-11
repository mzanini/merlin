import React from 'react'
import CharacterNameInput from '../containers/CharacterNameInput'
import GameCharactersList from '../containers/GameCharactersList'

const GamePage = () => {
  return (
    <React.Fragment>
      <GameCharactersList/>
      <CharacterNameInput/>
    </React.Fragment>
  )
}

export default GamePage