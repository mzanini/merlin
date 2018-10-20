import React from 'react'
import PropTypes from 'prop-types'
import CharacterCard from './CharacterCard'

const CharacterList = ({ characters, filter, deleteCharacter }) => {
  var filteredCharacters = characters
  if (typeof filter !== 'undefined' && filter !== null)
    filteredCharacters = characters.filter(filter)

  return (
    <React.Fragment>
      {
        filteredCharacters
          ? filteredCharacters.map((character) => <CharacterCard key={character.id} name={character.name} id={character.id} deleteCharacter={deleteCharacter}/>)
          : null
      }
    </React.Fragment>
  )
}

CharacterList.propTypes = {
  characters: PropTypes.array,
  filter: PropTypes.function,
  deleteCharacter: PropTypes.function
}

export default CharacterList
