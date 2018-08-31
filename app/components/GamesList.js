import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AddIcon from '@material-ui/icons/Add'
import GameCard from './GameCard'

export default class GamesList extends React.Component {
  render() {
    return(
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
            Game List
            </Typography>
          </Toolbar>
        </AppBar>
        {
          Object.keys(this.props.games)
            .map(name => <GameCard key={name} name={name} showGame={this.props.showGame}/>)
        }
        <Button variant="fab" color="primary" aria-label="Add">
          <AddIcon />
        </Button>
      </React.Fragment>
    )
  }
}