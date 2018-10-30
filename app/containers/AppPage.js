import { connect } from 'react-redux'
import Page from '../components/Page'

const mapStateToProps = state => {
  const isSetupCompleted = !(state.races === undefined || state.races.length === 0)
  return {
    selectedGameId: state.ui.selectedGameId,
    settingsOpen: state.ui.settingsOpen,
    setupCompleted: isSetupCompleted,
  }
}

const AppPage = connect(
  mapStateToProps
)(Page)

export default AppPage
