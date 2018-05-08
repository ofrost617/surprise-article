import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ArticlePicker from './ArticlePicker'
import Header from './Header'


class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <ArticlePicker/>
      </div>
    )
  }
}


export default App;

    // {/* <p>This is the app component which will contain the article picker component eventually, but where we will build it for now</p> */}
