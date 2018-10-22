import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

const EditStat = ({ label, value, onChange }) => (
  <TextField
    label={label}
    value={value}
    onChange={ (event) => { onChange(event, label) }}
    type="number"
    margin="normal"
    inputProps={{ min: 0 }}
  />
)

EditStat.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func
}

export default EditStat
