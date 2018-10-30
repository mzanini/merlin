import React from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'

function getSteps() {
  return ['Load races', 'Load social classes', 'Load minor abilities']
}

class SetupStepper extends React.Component {
  constructor() {
    super()
    this.state = { activeStep: 0 }

    this.handleNext = this.handleNext.bind(this)
    this.handleBack = this.handleBack.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleNext() {
    const { activeStep } = this.state
    let { skipped } = this.state
    if (this.isStepSkipped(activeStep)) {
      skipped = new Set(skipped.values())
      skipped.delete(activeStep)
    }
    this.setState({
      activeStep: activeStep + 1,
      skipped,
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
    const steps = getSteps()
    const { activeStep } = this.state

    return (
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
    )
  }
}

export default SetupStepper
