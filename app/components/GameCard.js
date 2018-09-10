import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'
import DeleteButton from './DeleteButton'

const GameCard = ({name, id, selectGame, deleteGame}) => (
  <Card>
    <CardActionArea onClick={ ()=>selectGame(id) }>
      <Typography variant="headline">
        {name}
      </Typography>
    </CardActionArea>
    <DeleteButton deleteAction={ ()=>deleteGame(id) }/>
  </Card>
)

export default GameCard