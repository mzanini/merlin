import React from 'react'
import { shallow } from 'enzyme'
import Game from '../app/components/Game'

test('starts with empty game name and info', () => {
    const game = shallow(<Game/>)
    //expect(game.state('name')).toEqual('');
})
