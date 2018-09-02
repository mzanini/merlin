import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import EditIcon from '@material-ui/icons/Edit'

const Character = (props) => {
  return(
  <Card>
    <CardContent>
      <Typography color="textSecondary">
        {props.name}
      </Typography>
      <Typography variant="headline" component="h2">
        {props.race}
      </Typography>
      <Table>
      <TableBody>
        <TableRow>
          <TableCell>Social Class</TableCell>
          <TableCell>{props.socialClass}</TableCell>
        </TableRow>
        {props.minors ?
          props.minors.map(function(ability, index) {
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
          <TableCell>{props.stats.strength}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Intelligence</TableCell>
          <TableCell>{props.stats.intelligence}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Wisdom</TableCell>
          <TableCell>{props.stats.wisdom}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Constitution</TableCell>
          <TableCell>{props.stats.constitution}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Dexterity</TableCell>
          <TableCell>{props.stats.dexterity}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Charisma</TableCell>
          <TableCell>{props.stats.charisma}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    </CardContent>
    <CardActions>
      <Button size="small">
        <EditIcon onClick={() => {props.showEditCharacter(props.name) }}/>
      </Button>
    </CardActions>
  </Card>
  );
}

export default Character;
