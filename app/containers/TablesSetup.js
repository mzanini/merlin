import { connect } from 'react-redux'
import SetupStepper from '../components/SetupStepper'
import { markOnboardingAsComplete } from '../actions'

const mapStateToProps = state => {
  return {
    steps: ['Load races', 'Load social classes', 'Load minor abilities'],
  }
}

const mapDispatchToProps = dispatch => (
  {
    markOnboardingAsComplete: () => dispatch(markOnboardingAsComplete()),
  }
)

const TablesSetup = connect(
  mapStateToProps,
  mapDispatchToProps
)(SetupStepper)

export default TablesSetup
