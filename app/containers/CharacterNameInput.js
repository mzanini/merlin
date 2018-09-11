import { connect } from 'react-redux'
import ConfirmText from '../components/ConfirmText'
import { createCharacter } from '../actions'

const mapStateToProps = state => {
  return {
    label: 'Name',
    buttonText: 'Create New Character',
    id: state.ui.selectedGameId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleConfirmAction: (characterName, gameId) => {
      dispatch(createCharacter(characterName, gameId))
    }
  }
}

const CharacterNameInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmText)

export default CharacterNameInput