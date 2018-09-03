import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const ConfirmText = ({ textFieldLabel, textFieldValue, onChangeTextFieldAction, buttonText, confirmAction }) => (
  <form noValidate autoComplete="off">
    <TextField
      id="text"
      label={textFieldLabel}
      value={textFieldValue}
      margin="normal"
      onChange={(e) => onChangeTextFieldAction(e.target.value)}
    />
    <Button variant="contained" color="secondary" onClick={() => confirmAction(textFieldValue)}>
      {buttonText}
    </Button>
  </form>
)

export default ConfirmText