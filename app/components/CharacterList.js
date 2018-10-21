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
          ? filteredCharacters.map((character) => <CharacterCard key={character.id} character={character} deleteCharacter={deleteCharacter}/>)
          : null
      }
    </React.Fragment>
  )
}

CharacterList.propTypes = {
  characters: PropTypes.array,
  filter: PropTypes.func,
  deleteCharacter: PropTypes.func
}

export default CharacterList
