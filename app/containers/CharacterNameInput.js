import { connect } from 'react-redux'
import ConfirmText from '../components/ConfirmText'
import { createCharacter } from '../actions'

const mapStateToProps = state => {
  return {
    label: 'Name',
    buttonText: 'Create New Character'
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleConfirmAction: (characterName) => {
      dispatch(createCharacter(characterName))
    }
  }
}

const CharacterNameInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmText)

export default CharacterNameInput