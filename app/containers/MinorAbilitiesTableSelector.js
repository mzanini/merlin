import { connect } from 'react-redux'
import Selector from '../components/Selector'
import { loadMinorAbilitiesTable } from '../actions'

const mapStateToProps = state => {
  return {
    fileName: state.minorAbilities.tablePath,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openSelectedFile: fileName => {
      dispatch(loadMinorAbilitiesTable(fileName))
    },
  }
}

const MinorAbilitiesTableSelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(Selector)

export default MinorAbilitiesTableSelector
