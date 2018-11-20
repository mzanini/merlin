import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = {
  helpText: {
    display: 'block',
    margin: 5,
  },
}

const TableSelectStep = (props, classes) => (
  <React.Fragment>
    <Typography className={classes.helpText}>
      {props.helpText}
    </Typography>
    {props.children}
  </React.Fragment>
)

TableSelectStep.propTypes = {
  children: PropTypes.node,
  helpText: PropTypes.string,
  classes: PropTypes.object,
}

export default withStyles(styles)(TableSelectStep)
