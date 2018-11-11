import { connect } from 'react-redux'
import Selector from '../components/Selector'
import { loadRacesTable } from '../actions'

const mapStateToProps = state => {
  return {
    fileName: state.ui.racesTablePath,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openSelectedFile: fileName => {
      dispatch(loadRacesTable(fileName))
    },
  }
}

const RacesTableSelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(Selector)

export default RacesTableSelector
