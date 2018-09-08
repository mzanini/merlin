import { connect } from 'react-redux'
import Page from '../components/Page'

const mapStateToProps = state => {
  return {
    selectedGame: state.ui.selectedGame
  }
}

const AppPage = connect(
  mapStateToProps
)(Page)

export default AppPage