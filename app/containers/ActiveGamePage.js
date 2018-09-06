import { connect } from 'react-redux'
import GamePage from '../components/GamePage'

const mapStateToProps = state => {
  return {
    createNewCharacter: state.newCharacterPage
  }
}

const ActiveGamePage = connect(
  mapStateToProps
)(GamePage)

export default ActiveGamePage