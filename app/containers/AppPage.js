import { connect } from 'react-redux'
import Page from '../components/Page'

const mapStateToProps = state => {
  return {
    selectedGameId: state.ui.selectedGameId
  }
}

const AppPage = connect(
  mapStateToProps
)(Page)

export default AppPage