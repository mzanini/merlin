import { connect } from 'react-redux'
import CharacterList from '../components/CharacterList'

const mapStateToProps = state => {
  return {
    characters: state.characters,
    filter: (character) => (character.game === state.ui.selectedGameId)
  }
}

const GameCharactersList = connect(
  mapStateToProps
)(CharacterList)

export default GameCharactersList