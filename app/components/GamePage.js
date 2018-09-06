import React from 'react'
import CreateNewCharacterButton from '../containers/CreateNewCharacterButton'
import CharacterNameInput from '../containers/CharacterNameInput'

const GamePage = ({ createNewCharacter }) => {
  if(createNewCharacter == true)
    return <CharacterNameInput/>
  else
    return (
      <React.Fragment>
        <CreateNewCharacterButton/>
      </React.Fragment>
    )
}

export default GamePage