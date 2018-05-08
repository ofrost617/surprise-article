import React from 'react';
import './App.css';
import Article from './Article'
import Header from './Header'


class App extends React.Component {
  render() {
    return (
      <div className="article-picker">
        <Header appname="Article Blackjack" />
        <Article/>
      </div>
    )
  }
}


export default App;

   