import { connect } from 'react-redux'
import AddButton from '../components/AddButton'
import { showNewGamePage } from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    addAction: () => {
      dispatch(showNewGamePage())
    }
  }
}

const CreateNewGameButton = connect(
  null,
  mapDispatchToProps
)(AddButton)

export default CreateNewGameButton
