import { connect } from 'react-redux'
import Page from '../components/Page'

const mapStateToProps = state => {
  return {
    selectedGame: state.selectedGame,
    newGamePage: state.newGamePage
  }
}

const AppPage = connect(
  mapStateToProps
)(Page)

export default AppPage