import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import GameCard from './GameCard'

const GameList = ({ games, selectGame }) => (
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
      games ?
      games.map( (game, index) => <GameCard key={index} name={game.name} id={index} selectGame={selectGame}/>)
        : null
    }
  </React.Fragment>
)

export default GameList