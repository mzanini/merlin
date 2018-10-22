import { connect } from 'react-redux'
import CharacterEditModal from '../components/CharacterEditModal'
import { updateCharacter, closeCharacterEditModal } from '../actions'

const mapStateToProps = state => {
  const isModalOpen = state.ui.selectedCharacterId !== null
  return {
    isOpen: isModalOpen,
    character: state.characters.find((character) => character.id === state.ui.selectedCharacterId)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCharacter: character => {
      dispatch(updateCharacter(character.id, character))
    },
    closeCharacterEditModal: () => dispatch(closeCharacterEditModal())
  }
}

const CharacterEdit = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterEditModal)

export default CharacterEdit
