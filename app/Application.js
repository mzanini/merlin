import React from 'react'
import ReactDOM from 'react-dom'
import 'typeface-roboto'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AddIcon from '@material-ui/icons/Add'
import GameCard from './components/GameCard'

class Application extends React.Component {
  constructor() {
    super()

    this.createNewGame = this.createNewGame.bind(this)
    this.deleteGame = this.deleteGame.bind(this)
    this.addNewCharacter = this.addNewCharacter.bind(this)

    this.state = {
      games: {}
    }
  }

  componentWillMount() {
    const localStorageRef = localStorage.getItem('deememory-games')
    if(localStorageRef)
      this.setState({ games: JSON.parse(localStorageRef) })
  }

  componentDidUpdate(nextProps, nextState) {
    localStorage.setItem(`deememory-games`, JSON.stringify(this.state.games))
  }

  createNewGame(gameName) {
    var game = {name: gameName}
    game.characters = {}
    const games = {...this.state.games}
    games[game.name] = game
    this.setState({ games })
  }

  addNewCharacter(gameName, character) {
    const games = {...this.state.games}
    const characters = {...games[gameName].characters}
    characters[character.name] = character
    games[gameName].characters = characters
    this.setState({ games })
  }

  deleteGame(gameName) {
    const games = {...this.state.games}
    delete games[gameName];
    this.setState( {games} );
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
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
          Object.keys(this.state.games)
            .map(name => <GameCard key={name} name={name}/>)
        }
        <Button variant="fab" color="primary" aria-label="Add">
          <AddIcon />
        </Button>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Application/>, document.querySelector('#app'))

