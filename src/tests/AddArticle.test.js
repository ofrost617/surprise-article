import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import React from 'react';
import AddArticle from '../components/AddArticle';

var mock = new MockAdapter(axios);

mock.onGet('http://api.linkpreview.net/?key=5af31b2549e9a9602772d53f84448e1fee3068238405b&q=www.google.com').reply(200, {
  description: "Search the world's information",
  title: "Google",
  url: "https://www.google.com/"
  }
);

it ('fetches data when the request is called', () => {
  axios.get('http://api.linkpreview.net/?key=5af31b2549e9a9602772d53f84448e1fee3068238405b&q=www.google.com')
  .then(response => {
    expect(response).toBeDefined()
    expect(response.data.title).toEqual('Google')
  })
});
