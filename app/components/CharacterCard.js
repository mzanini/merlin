import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'
import Stat from './Stat'
import DeleteButton from './DeleteButton'
import Grid from '@material-ui/core/Grid'

const styles = {
  card: {
    display: 'block',
    margin: 12,
    minHeight: 15,
  },
  table: {
    padding: '1px 1px 1px 1px',
  },
}

const CharacterCard = ({ character, deleteCharacter, showCharacterEditModal, classes }) => (
  <Card className={classes.card}>
    <Grid container spacing={16}>
      <Grid item>
        <CardActionArea onClick={ () => showCharacterEditModal(character.id) }>
          <Typography variant="headline">
            {character.name}
          </Typography>
          <Stat name='strength' value={character.strength}/>
          <Stat name='intelligence' value={character.intelligence}/>
          <Stat name='Wisdom' value={character.wisdom}/>
          <Stat name='Constitution' value={character.constitution}/>
          <Stat name='Dexterity' value={character.dexterity}/>
          <Stat name='Charisma' value={character.charisma}/>
          <br/>
          <Stat name='Race' value={character.race}/>
          <Stat name='Social Class' value={character.socialClass}/>
        </CardActionArea>
      </Grid>
      <Grid item>
        <DeleteButton deleteAction={ () => deleteCharacter(character.id) }/>
      </Grid>
    </Grid>
  </Card>
)

CharacterCard.propTypes = {
  character: PropTypes.object,
  deleteCharacter: PropTypes.func,
  showCharacterEditModal: PropTypes.func,
  classes: PropTypes.object,
}

export default withStyles(styles)(CharacterCard)
