import { connect } from 'react-redux'
import ConfirmText from '../components/ConfirmText'
import { changeNewGameName, createGame } from '../actions'

const mapStateToProps = () => {
  return {
    label: 'Name',
    buttonText: 'Create New Game'
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleConfirmAction: (gameName) => {
      dispatch(createGame(gameName))
    }
  }
}

const NewGameNameInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmText)

export default NewGameNameInput