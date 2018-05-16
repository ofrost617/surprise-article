import React from 'react';
import enzyme from 'enzyme';
import { shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../components/Header';

enzyme.configure({ adapter: new Adapter() });

describe('Test header', () => {
  it('renders with correct text', () => {
    const header = shallow(<Header appname="Article Blackjack"/>)
    expect(header.text()).toEqual('Article Blackjack');
  });
});