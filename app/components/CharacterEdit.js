import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'

export default class CharacterEdit extends React.Component {
  render() {
    return (
      <Card>
        <CardContent>
          <TextField
            id="name"
            label="Name"
            value={this.props.name}
            onChange={this.props.editCharacter('name')}
            margin="normal"
          />
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>)
  }
}