import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'

const GameCard = ({name, selectGame}) => (
  <Card>
    <CardActionArea onClick={ ()=> {selectGame(name)} }>
      <Typography variant="headline">
        {name}
      </Typography>
    </CardActionArea>
  </Card>
)

export default GameCard