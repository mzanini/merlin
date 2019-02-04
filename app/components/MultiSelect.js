import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'

const styles = {
  root: {
    flexGrow: 1,
    height: 80,
    display: 'block',
  },
}

class MultiSelect extends React.Component {
  render() {
    return (
      <FormControl className={this.props.classes.root}>
        <InputLabel>{this.props.label}</InputLabel>
        <Select
          value={this.props.value ? this.props.value : this.props.optionsList[0].name}
          onChange={ (event) => { this.props.onChange(event) } }
          displayEmpty
        >
          {
            this.props.optionsList.map(
              (option) => <MenuItem key={option.id} value={option.name}>{option.name}</MenuItem>
            )
          }
        </Select>
      </FormControl>
    )
  }
}

MultiSelect.propTypes = {
  label: PropTypes.string,
  placeHolder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  optionsList: PropTypes.array,
  classes: PropTypes.object,
  theme: PropTypes.object,
}

export default withStyles(styles)(MultiSelect)
