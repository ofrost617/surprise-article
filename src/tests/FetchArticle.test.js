import React from 'react';
import ReactDOM from 'react-dom';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import FetchArticle from '../components/FetchArticle';

enzyme.configure({ adapter: new Adapter() });


it ('fetches a snapshot of the database and renders a random article', () => {
// article1 = this.state.randomArticle.url
// click button
// expect(this.state.randomArticle.url) != article1
// });
// expect(this.state.randomArticle).toBeGreaterThan(0);
  const randomArticle = {   
    description: "Search the world's information",
    title: "Google",
    url: "https://www.google.com/",
    thumbnail: ''
  }
  const wrapper = mount(<FetchArticle randomArticle={randomArticle}/>);
  const p = wrapper.find('.articleTitle');
  expect(p.text).toEqual(randomArticle.title);

})

// check val of random article is greater than before click
// mock dataset with articles in it, pass it into component and check that they aren't the same
// create mock json response
// look up render component in tests
