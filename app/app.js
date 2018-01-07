import React from 'react';
import {render} from 'react-dom';
import { MemoryRouter, Switch, Route } from 'react-router';
import NewGame from './components/NewGame';
import Game from './components/Game';
import Start from './components/Start';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor() {
    super()
    
    this.createNewGame = this.createNewGame.bind(this)

    this.state = {
      games: {}
    }
  }
  
  createNewGame(gameName) {
    var game = {name: gameName}
    const games = {...this.state.games}
    games[game.name] = game
    this.setState({ games })
  }

  render() {
    return (
      <MemoryRouter
        initialEntries={[ '/', '/game']}
        initialIndex={0}>
        <div>
          <Switch>
            <Route exact path="/" component={() => <Start games={this.state.games}/>}/>
            <Route exact path="/new-game" component={() => <NewGame createNewGame={this.createNewGame}/>} />
            <Route exact pattern="/game/:gameName" component={Game} />
          </Switch>
        </div>
      </MemoryRouter>
    );
  }
}

render(<App/>, document.querySelector('#app'))
