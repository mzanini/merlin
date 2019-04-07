import { connect } from 'react-redux'
import Page from '../components/Page'

const mapStateToProps = state => {
  return {
    selectedGameId: state.ui.selectedGameId,
    settingsOpen: state.ui.settingsOpen,
    setupCompleted: state.ui.onBoardingCompleted,
  }
}

const AppPage = connect(
  mapStateToProps
)(Page)

export default AppPage
