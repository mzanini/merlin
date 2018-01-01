import React from 'react';
import {render} from 'react-dom';
import { MemoryRouter, Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import SingleCharacterRolling from './components/single-character-rolling';
import NewGame from './components/NewGame';
import Game from './components/Game';
import 'bootstrap/dist/css/bootstrap.min.css';

const Root = () => {
return (
  <MemoryRouter
    initialEntries={[ '/', '/game']}
    initialIndex={0}>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm">
          <Link to="/"> Homepage </Link>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <Link to="/new-game"> New game </Link>
        </div>
      </div>
      <Switch>
        <Route exact path="/"/>
        <Route path="/new-game" component={NewGame} />
        <Route pattern="/game/:gameName" component={Game} />
      </Switch>
    </div>
  </MemoryRouter>
)
}


render(<Root/>, document.querySelector('#app'))
