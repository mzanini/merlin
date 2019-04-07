import { connect } from 'react-redux'
import SetupStepper from '../components/SetupStepper'
import { markOnboardingAsComplete, closeSettings } from '../actions'

const mapStateToProps = state => {
  return {
    steps: ['Load races', 'Load social classes', 'Load minor abilities'],
  }
}

const mapDispatchToProps = dispatch => (
  {
    markOnboardingAsComplete: () => dispatch(markOnboardingAsComplete()),
    closeSettings: () => dispatch(closeSettings()),
  }
)

const TablesSetup = connect(
  mapStateToProps,
  mapDispatchToProps
)(SetupStepper)

export default TablesSetup
