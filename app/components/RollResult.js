import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const styles = {
  root: {
    display: 'inline-block',
    margin: 5,
  },
}

const RollResult = ({ classes, rolls, onClose }) => (
  <Card className={classes.root}>
    <CardContent>
      <List>
        {
          rolls.map((number, index) => { return <ListItem key={index}><ListItemText primary={number}/></ListItem> })
        }
      </List>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={(event) => onClose(event)}>
        <DeleteSweepIcon/>
      </Button>
    </CardActions>
  </Card>
)

RollResult.propTypes = {
  classes: PropTypes.object,
  rolls: PropTypes.array,
  onClose: PropTypes.func,
}

export default withStyles(styles)(RollResult)
