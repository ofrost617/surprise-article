import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Article from './Article'
import Header from './Header'


class App extends React.Component {
  render() {
    return (
      <div className="article-blackjack">
        <Header/>
        <Article/>
      </div>
    )
  }
}


export default App;

  