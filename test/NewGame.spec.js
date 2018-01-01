import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import NewGame from '../app/components/NewGame';

describe('<NewGame/>', function () {
  it('should have a button to start a game', function () {
    const wrapper = shallow(<NewGame/>);
    expect(wrapper.find('button')).to.have.length(1);
  });
});