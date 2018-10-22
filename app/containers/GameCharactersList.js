import { connect } from 'react-redux'
import CharacterList from '../components/CharacterList'
import { deleteCharacter, showCharacterEditModal } from '../actions'

const mapStateToProps = state => {
  return {
    characters: state.characters,
    filter: (character) => (character.game === state.ui.selectedGameId)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCharacter: id => {
      dispatch(deleteCharacter(id))
    },
    showCharacterEditModal: (id) => {
      dispatch(showCharacterEditModal(id))
    }
  }
}

const GameCharactersList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterList)

export default GameCharactersList
