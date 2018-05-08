import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <img className="thumbnail" src="https://images.pexels.com/photos/920115/pexels-photo-920115.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>
        <h2>This will be the title of the article</h2>
        <h3>This will be the description of the article</h3>
        <button type="button">Twist</button>
        <button type="button">Stick</button>
      </div>
    )
  }
}


export default App;

    {/* <p>This is the app component which will contain the article picker component eventually, but where we will build it for now</p> */}
