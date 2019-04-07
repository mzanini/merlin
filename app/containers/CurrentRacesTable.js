import { connect } from 'react-redux'
import RacesTable from '../components/RacesTable'

const mapStateToProps = state => {
  return {
    races: state.races,
  }
}

const CurrentRacesTable = connect(
  mapStateToProps
)(RacesTable)

export default CurrentRacesTable
