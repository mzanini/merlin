import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'

const GameCard = ({name, id, selectGame}) => (
  <Card>
    <CardActionArea onClick={ () => selectGame(id) }>
      <Typography variant="headline">
        {name}
      </Typography>
    </CardActionArea>
  </Card>
)

export default GameCard