import React from 'react';
import enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Begin from '../components/Begin';

enzyme.configure({ adapter: new Adapter() });

describe('Test button click to get article', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();

    const button = shallow((<button className="goToRandomArticle" onClick={mockCallBack}>Give me and article</button>));
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
