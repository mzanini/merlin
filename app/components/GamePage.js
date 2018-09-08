import React from 'react'
import CharacterNameInput from '../containers/CharacterNameInput'
import AllCharactersList from '../containers/AllCharactersList';

const GamePage = () => {
  return (
    <React.Fragment>
      <AllCharactersList/>
      <CharacterNameInput/>
    </React.Fragment>
  )
}

export default GamePage