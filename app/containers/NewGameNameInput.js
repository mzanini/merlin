import { connect } from 'react-redux'
import ConfirmText from '../components/ConfirmText'
import { changeNewGameName, createGame } from '../actions'

const mapStateToProps = state => {
  return {
    textFieldLabel: 'Name',
    textFieldValue: state.newGameName,
    buttonText: 'Create New Game'
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeTextFieldAction: gameName => {
      dispatch(changeNewGameName(gameName))
    },
    confirmAction: (gameName) => {
      dispatch(createGame(gameName))
    }
  }
}

const NewGameNameInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmText)

export default NewGameNameInput