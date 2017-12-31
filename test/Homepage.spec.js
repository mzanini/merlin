import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Homepage from '../app/components/Homepage';

describe('<Homepage/>', function () {
  it('should have a button to start a game', function () {
    const wrapper = shallow(<Homepage/>);
    expect(wrapper.find('button')).to.have.length(1);
  });
});