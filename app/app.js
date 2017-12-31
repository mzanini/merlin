import React from 'react';
import {render} from 'react-dom';
import { MemoryRouter, Switch, Route } from 'react-router';
import SingleCharacterRolling from './components/single-character-rolling';
import Homepage from './components/Homepage';

const Root = () => {
return (
    <MemoryRouter>
        <div>
            <Switch>
                <Route path="/" component={Homepage} />
            </Switch>
        </div>
    </MemoryRouter>
)
}


render(<Root/>, document.querySelector('#app'))
