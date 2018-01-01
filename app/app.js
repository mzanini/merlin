import React from 'react';
import {render} from 'react-dom';
import { MemoryRouter, Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import SingleCharacterRolling from './components/single-character-rolling';
import NewGame from './components/NewGame';
import Game from './components/Game';

const Root = () => {
return (
  <MemoryRouter
    initialEntries={[ '/', '/game']}
    initialIndex={0}>
    <div>
    <Link to="/"> homepage </Link>
    <Link to="/new-game"> New game </Link>
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
