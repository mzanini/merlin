import { connect } from 'react-redux'
import GamePage from '../components/GamePage'

const mapStateToProps = state => {
  return {
    showPage: state.ui.gamePage
  }
}

const ActiveGamePage = connect(
  mapStateToProps
)(GamePage)

export default ActiveGamePage