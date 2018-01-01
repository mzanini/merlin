import React from 'react';
import {render} from 'react-dom';
import { MemoryRouter, Switch, Route } from 'react-router';
import NewGame from './components/NewGame';
import Game from './components/Game';
import Start from './components/Start';
import 'bootstrap/dist/css/bootstrap.min.css';

const Root = () => {
return (
  <MemoryRouter
    initialEntries={[ '/', '/game']}
    initialIndex={0}>
    <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={Start}/>
        <Route path="/new-game" component={NewGame} />
        <Route pattern="/game/:gameName" component={Game} />
      </Switch>
    </div>
  </MemoryRouter>
)
}

render(<Root/>, document.querySelector('#app'))
