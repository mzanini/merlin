import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default class Character extends React.Component {
  render() {
    var character = this.props.character;
    return (
      <Card>
      <CardContent>
        <Typography color="textSecondary">
          {character.name}
        </Typography>
        <Typography variant="headline" component="h2">
          {character.race ? character.race : null}
        </Typography>
        <Table>
        <TableBody>
          <TableRow>
            <TableCell>Social Class</TableCell>
            <TableCell>{character.socialClass ? character.socialClass : null}</TableCell>
          </TableRow>
          {character.minors ?
            character.minors.map(function(ability, index) {
              return (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    Minor ability
                  </TableCell>
                  <TableCell numeric>{ability}</TableCell>
                </TableRow>
              );
            })
            : null
          }
          <TableRow>
            <TableCell>Strength</TableCell>
            <TableCell>{character.stats.strength}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Intelligence</TableCell>
            <TableCell>{character.stats.intelligence}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Wisdom</TableCell>
            <TableCell>{character.stats.wisdom}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Constitution</TableCell>
            <TableCell>{character.stats.constitution}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Dexterity</TableCell>
            <TableCell>{character.stats.dexterity}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Charisma</TableCell>
            <TableCell>{character.stats.charisma}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    );
  }
}
