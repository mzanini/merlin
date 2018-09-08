import React from 'react'
import CharacterCard from './CharacterCard'

const CharacterList = ({ characters }) => (
  <React.Fragment>
    {
      characters ?
      characters.map( (character, index) => <CharacterCard key={index} name={character.name} id={index}/>)
        : null
    }
  </React.Fragment>
)

export default CharacterList