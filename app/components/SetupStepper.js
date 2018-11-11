import React from 'react'
import PropTypes from 'prop-types'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import SelectRacesTableStep from './SelectRacesTableStep'

class SetupStepper extends React.Component {
  constructor() {
    super()
    this.state = { activeStep: 0 }

    this.handleNext = this.handleNext.bind(this)
    this.handleBack = this.handleBack.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleNext() {
    this.setState({
      activeStep: this.state.activeStep + 1,
    })
  }

  handleBack() {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }))
  }

  handleReset() {
    this.setState({
      activeStep: 0,
    })
  }

  render() {
    const { activeStep } = this.state

    return (
      <React.Fragment>
        <Stepper activeStep={activeStep}>
          {this.props.steps.map((label) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            )
          })}
        </Stepper>
        <SelectRacesTableStep/>
      </React.Fragment>
    )
  }
}

export default SetupStepper

SetupStepper.propTypes = {
  steps: PropTypes.array,
}
