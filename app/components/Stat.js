import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = {
  root: {
    display: 'inline-block',
    padding: 5
  }
}

const Stat = ({ name, value, classes }) => (
  <div className={classes.root}>
    <Typography variant="caption">
      {name}
    </Typography>
    <Typography>
      {value}
    </Typography>
  </div>
)

Stat.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  classes: PropTypes.object
}

export default withStyles(styles)(Stat)
