import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'
import DeleteButton from './DeleteButton'
import Grid from '@material-ui/core/Grid'

const GameCard = ({name, id, selectGame, deleteGame}) => (
  <Card>
    <Grid container spacing={16}>
      <Grid item>
        <CardActionArea onClick={ ()=>selectGame(id) }>
          <Typography variant="headline">
            {name}
          </Typography>
        </CardActionArea>
      </Grid>
      <Grid item>
        <DeleteButton deleteAction={ ()=>deleteGame(id) }/>
      </Grid>
    </Grid>
  </Card>
)

export default GameCard