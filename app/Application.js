import React from 'react'
import ReactDOM from 'react-dom'
import 'typeface-roboto'
import CssBaseline from '@material-ui/core/CssBaseline'
import Game from './components/Game'
import { createStore } from 'redux'
import myReducer from './reducers'
import { Provider } from 'react-redux'
import CreateNewGameButton from './containers/CreateNewGameButton'
import AppPage from './containers/AppPage'
import MainPageHeader from './containers/MainPageHeader';

const store = createStore(myReducer)

class Application extends React.Component {
  constructor() {
    super()

    this.createNewGame = this.createNewGame.bind(this)
    this.deleteGame = this.deleteGame.bind(this)
    this.addNewCharacter = this.addNewCharacter.bind(this)
    this.updateCharacter = this.updateCharacter.bind(this)
    this.showGameList = this.showGameList.bind(this)
    this.showGame = this.showGame.bind(this)

    this.state = {
      games: {},
      selectedGame: null
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

  updateCharacter(gameName, characterName, newCharacter) {
    const newGames = {...this.state.games}
    const characters = {...newGames[gameName].characters}
    characters[characterName] = newCharacter
    newGames[gameName].characters = characters
    this.setState({ games: newGames })
  }

  deleteGame(gameName) {
    const games = {...this.state.games}
    delete games[gameName];
    this.setState( {games} );
  }

  showGameList() {
    this.setState({ selectedGame: null })
  }

  showGame(name) {
    this.setState({ selectedGame: name })
  }

  render() {
    if(this.state.selectedGame)
      var page = <Game game={this.state.games[this.state.selectedGame]} showGameList={this.showGameList} addNewCharacter={this.addNewCharacter}
        updateCharacter={this.updateCharacter}/>
    else
      var page = (
        <React.Fragment>
          <MainPageHeader/>
          <AppPage/>
          <CreateNewGameButton/>
        </React.Fragment>
      )

    return (
      <React.Fragment>
        <CssBaseline />
        {page}
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Provider store={store}><Application/></Provider>, document.querySelector('#app'))

