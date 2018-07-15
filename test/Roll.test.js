import React from 'react'
import { shallow } from 'enzyme'
import Roll from '../app/components/Roll'

test('starts with more common settings', () => {
    const roll = shallow(<Roll/>)
    expect(roll.state('faces')).toEqual('4')
    expect(roll.state('adjust')).toEqual(0)
    expect(roll.state('count')).toEqual(1)
    expect(roll.state('rolls')).toEqual([])
})
