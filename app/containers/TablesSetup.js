import { connect } from 'react-redux'
import SetupStepper from '../components/SetupStepper'

const mapStateToProps = state => {
  return {
    steps: ['Load races', 'Load social classes', 'Load minor abilities'],
  }
}

const TablesSetup = connect(
  mapStateToProps
)(SetupStepper)

export default TablesSetup
