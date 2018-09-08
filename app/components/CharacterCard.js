import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'

const CharacterCard = ({name, id}) => (
  <Card>
    <CardActionArea onClick={ () => selectGame(id) }>
      <Typography variant="headline">
        {name}
      </Typography>
    </CardActionArea>
  </Card>
)

export default CharacterCard