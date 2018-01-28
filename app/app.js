import React from 'react';
import {render} from 'react-dom';
import { MemoryRouter, Switch, Route } from 'react-router';
import Game from './components/Game';
import Start from './components/Start';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
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
    this.setState({ games }) 
  }

  deleteGame(gameName) {
    const games = {...this.state.games}
    delete games[gameName];
    this.setState( {games} );
  }

  render() {
    return (
      <MemoryRouter
        initialEntries={[ '/', '/game']}
        initialIndex={0}>
        <div>
          <Switch>
            <Route exact path="/" component={() => <Start games={this.state.games} deleteGame={this.deleteGame} 
              setCurrentGame={this.setCurrentGame} createNewGame={this.createNewGame}/>} />
            <Route exact pattern="/game/:gameName" component={() => <Game games={this.state.games}/>} />
          </Switch>
        </div>
      </MemoryRouter>
    );
  }
}

render(<App/>, document.querySelector('#app'))
