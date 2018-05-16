import React from 'react';
import enzyme from 'enzyme';
import {mount, shallow} from 'enzyme';
import { createMemoryHistory } from 'history'
import Adapter from 'enzyme-adapter-react-16';
import Begin from '../components/Begin';

enzyme.configure({ adapter: new Adapter() });

describe('Test Begin', () => {
  it('renders with correct text', () => {
    const begin = mount(<Begin/>)
    expect(begin.text()).toContain('Click below to begin');
  });

  // it('Test click event', () => {
  //   const mockCallBack = jest.fn();
  //   const begin = mount(<Begin onClick={mockCallBack} />)
  //   begin.setProps({ history: 'history'});
  
  //   begin.find('#goToRandomArticle').simulate('click');
  //   expect(mockCallBack.mock.calls.length).toEqual(1);
  // });

});

// describe('<Begin />', () => {
//   it('should render correctly', () => {
//     const goToArticleSelector = jest.fn();
//     const history = createMemoryHistory('/')
//     const renderedComponent = mount(
//       <Begin onClick={goToArticleSelector}/>
//     )
//     expect(renderedComponent.state.history).toBeNull;
//     const button = renderedComponent.find('#goToRandomArticle');
//     button.simulate('click');
//     expect(renderedComponent.state.history).toBeNull;
    
//     // expect(goToArticleSelector).toBeCalled();
//     // renderedComponent.setProps
//     // renderedComponent.find('#goToRandomArticle').simulate('click');
//     // expect(mockCallBack.mock.calls.length).toEqual(1);
//   })
// })



// import React from 'react';
// import enzyme from 'enzyme';
// import { shallow, mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import Begin from '../components/Begin';

// enzyme.configure({ adapter: new Adapter() });

// describe('Test button click to get article', () => {
//   it('Test click event', () => {
//     const mockCallBack = jest.fn();
//     const begin = mount(<Begin onClick={mockCallBack} />)
  
//     begin.find('#goToRandomArticle').simulate('click');
//     expect(mockCallBack.mock.calls.length).toEqual(1);
//   });
// });


// // mock this.props.history
// // look at setting default props
