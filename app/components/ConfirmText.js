import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class ConfirmText extends Component {
  constructor() {
    super()
    this.state = {value: ''}

    this.confirmAction = this.confirmAction.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  confirmAction() {
    this.props.handleConfirmAction(this.state.value, this.props.id)
    this.setState({value: ''})
  }

  handleChange(newValue) {
    this.setState({value: newValue})
  }

  render() {
    return (
      <form noValidate autoComplete="off">
        <TextField
          id="text"
          label={this.props.label}
          value={this.state.value}
          margin="normal"
          onChange={(e) => this.handleChange(e.target.value)}
        />
        <Button variant="contained" color="secondary" onClick={() => this.confirmAction()}>
          {this.props.buttonText}
        </Button>
      </form>
    )
  }
}

export default ConfirmText