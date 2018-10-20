import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'
import Stat from './Stat'

const styles = {
  card: {
    display: 'block',
    margin: 12,
    minHeight: 15
  },
  table: {
    padding: '1px 1px 1px 1px'
  }
}

const CharacterCard = ({ name, id, classes }) => (
  <Card className={classes.card}>
    <CardActionArea>
      <Typography variant="headline">
        {name}
      </Typography>
      <Stat name='strength' value={10}/>
      <Stat name='intelligence' value={10}/>
      <Stat name='Wisdom' value={10}/>
      <Stat name='Constitution' value={10}/>
      <Stat name='Dexterity' value={10}/>
      <Stat name='Charisma' value={10}/>
    </CardActionArea>
  </Card>
)

CharacterCard.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  classes: PropTypes.object
}

export default withStyles(styles)(CharacterCard)
