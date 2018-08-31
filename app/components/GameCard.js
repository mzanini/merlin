import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'

export default class GameCard extends React.Component {
  render() {
    return (
      <Card>
        <CardActionArea onClick={ ()=> {this.props.showGame(this.props.name)} }>
          <Typography variant="headline">
            {this.props.name}
          </Typography>
        </CardActionArea>
      </Card>
    );
  }
}