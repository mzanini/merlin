import { connect } from 'react-redux'
import AddButton from '../components/AddButton'
import { showCreateCharacterPage } from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    addAction: () => {
      dispatch(showCreateCharacterPage())
    }
  }
}

const CreateNewCharacterButton = connect(
  null,
  mapDispatchToProps
)(AddButton)

export default CreateNewCharacterButton
