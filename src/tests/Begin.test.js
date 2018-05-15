import React from 'react';
import enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Begin from '../components/Begin';

enzyme.configure({ adapter: new Adapter() });

describe('Test button click to get article', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();
    const begin = mount(<Begin onClick={mockCallBack} />)
  
    begin.find('#goToRandomArticle').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});


// mock this.props.history
// look at setting default props
