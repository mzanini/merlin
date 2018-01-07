import React from 'react';
import {render} from 'react-dom';
import { MemoryRouter, Switch, Route } from 'react-router';
import NewGame from './components/NewGame';
import Game from './components/Game';
import Start from './components/Start';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <MemoryRouter
        initialEntries={[ '/', '/game']}
        initialIndex={0}>
        <div>
          <Switch>
            <Route exact path="/" component={Start}/>
            <Route exact path="/new-game" component={NewGame} />
            <Route exact pattern="/game/:gameName" component={Game} />
          </Switch>
        </div>
      </MemoryRouter>
    );
  }
}

render(<App/>, document.querySelector('#app'))
