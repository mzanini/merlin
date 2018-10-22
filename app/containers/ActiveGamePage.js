import { connect } from 'react-redux'
import GamePage from '../components/GamePage'

const mapStateToProps = state => {
  const isCharacterEditOpen = state.ui.selectedCharacterId === null
  return {
    showPage: state.ui.gamePage,
    isCharacterEditOpen: isCharacterEditOpen
  }
}

const ActiveGamePage = connect(
  mapStateToProps
)(GamePage)

export default ActiveGamePage
