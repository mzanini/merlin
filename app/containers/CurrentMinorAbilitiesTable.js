import { connect } from 'react-redux'
import MinorAbilitiesTable from '../components/MinorAbilitiesTable'

const mapStateToProps = state => {
  return {
    minorAbilities: state.minorAbilities,
  }
}

const CurrentMinorAbilitiesTable = connect(
  mapStateToProps
)(MinorAbilitiesTable)

export default CurrentMinorAbilitiesTable
