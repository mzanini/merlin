import { connect } from 'react-redux'
import ConfirmText from '../components/ConfirmText'
import { changeNewCharacterName, createCharacter } from '../actions'

const mapStateToProps = state => {
  return {
    textFieldLabel: 'Name',
    textFieldValue: state.newCharacterName,
    buttonText: 'Create New Character'
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeTextFieldAction: characterName => {
      dispatch(changeNewCharacterName(characterName))
    },
    confirmAction: (characterName) => {
      dispatch(createCharacter(characterName))
    }
  }
}

const CharacterNameInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmText)

export default CharacterNameInput