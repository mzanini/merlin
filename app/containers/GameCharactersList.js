import { connect } from 'react-redux'
import CharacterList from '../components/CharacterList'
import { deleteCharacter, showCharacterEditModal } from '../actions'

const mapStateToProps = state => {
  let sortAlphabetically = (a, b) => {
    if (a.name < b.name)
      return -1
    if (a.name > b.name)
      return 1

    return 0
  }

  return {
    characters: state.characters.sort(sortAlphabetically),
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
