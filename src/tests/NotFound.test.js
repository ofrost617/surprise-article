import React from 'react';
import enzyme from 'enzyme';
import { shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotFound from '../components/NotFound';

enzyme.configure({ adapter: new Adapter() });

describe('Test button click to get article', () => {
  it('Test click event', () => {
    const notFound = shallow(<NotFound/>)
    expect(notFound.text()).toEqual('Not Found!');
  });
});