import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'
import DeleteButton from './DeleteButton'
import Grid from '@material-ui/core/Grid'

const styles = {
  card: {
    display: 'block',
    margin: 12,
    minHeight: 15
  }
}

const GameCard = ({ classes, name, id, selectGame, deleteGame }) => (
  <Card className={classes.card}>
    <Grid container spacing={16}>
      <Grid item>
        <CardActionArea onClick={ () => selectGame(id) }>
          <Typography variant="headline">
            {name}
          </Typography>
        </CardActionArea>
      </Grid>
      <Grid item>
        <DeleteButton deleteAction={ () => deleteGame(id) }/>
      </Grid>
    </Grid>
  </Card>
)

GameCard.propTypes = {
  classes: PropTypes.object,
  name: PropTypes.string.isRequired,
  id: PropTypes.number,
  selectGame: PropTypes.func,
  deleteGame: PropTypes.func
}

export default withStyles(styles)(GameCard)
