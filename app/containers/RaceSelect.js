import { connect } from 'react-redux'
import MultiSelect from '../components/MultiSelect'

const mapStateToProps = state => {
  return {
    placeHolder: 'Select a Race',
    optionsList: state.races,
    label: 'Race',
  }
}

const RaceSelect = connect(
  mapStateToProps
)(MultiSelect)

export default RaceSelect
