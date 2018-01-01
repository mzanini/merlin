import React from 'react';
import {render} from 'react-dom';
import { MemoryRouter, Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import SingleCharacterRolling from './components/single-character-rolling';
import Homepage from './components/Homepage';

const Root = () => {
return (
  <MemoryRouter
    initialEntries={[ '/', '/game']}
    initialIndex={0}>
    <div>
    <Link to="/"> homepage </Link>
    <Link to="/game"> game </Link>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/game" component={SingleCharacterRolling} />
      </Switch>
    </div>
  </MemoryRouter>
)
}


render(<Root/>, document.querySelector('#app'))
