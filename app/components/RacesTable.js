import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
})

const RacesTable = ({ classes, races }) => (
  <Paper className={classes.root}>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="right">Probability</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {races.map(race => (
          <TableRow key={race.id}>
            <TableCell component="th" scope="row">{race.name}</TableCell>
            <TableCell align="right">{race.probability}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
)

RacesTable.propTypes = {
  classes: PropTypes.object.isRequired,
  races: PropTypes.array,
}

export default withStyles(styles)(RacesTable)
