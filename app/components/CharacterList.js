import React from 'react'
import CharacterCard from './CharacterCard'

const CharacterList = ({ characters, filter }) => {
  var filteredCharacters = characters
  if(typeof filter != 'undefined' && filter != null)
    filteredCharacters = characters.filter(filter)

  return (
    <React.Fragment>
      {
        filteredCharacters ?
        filteredCharacters.map( (character) => <CharacterCard key={character.id} name={character.name} id={character.id}/>)
          : null
      }
    </React.Fragment>
  )
}

export default CharacterList