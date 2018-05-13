import React from 'react';

import '../css/App.css';

import FetchArticle from './FetchArticle'
import Header from './Header'


class App extends React.Component {
  render() {
    return (
      <div className="article-picker">
        <Header appname="Article Blackjack" />
        <FetchArticle/>
      </div>
    )
  }
}


export default App;

   