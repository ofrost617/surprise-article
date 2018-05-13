import React from 'react';

import AddArticle from './AddArticle'

class Begin extends React.Component {
  // constructor() {
  //   super();
  //   this.goToArticle = this.goToArticle.bind(this);
  // }
  // This is the same as .bind(this on in the onClick but I've used the other way ay I'm only going to be rendering the begin component once on the page)

  goToArticleSelector = (event) => {
    this.props.history.push(`article`)

  }
  render() {
    return (
      <div>
        <h1>Welcome to Article Blackjack!</h1>
        <h2>Got lots of saved articles and no time to choose? Let us help you out</h2>
        <p>Click below to begin</p>
        <button type="button" onClick={this.goToArticleSelector}>Give me an article</button>
        <p>Want to add an article? Add a url below and click save</p>
        <AddArticle/>
      </div>
    )
  }
}

export default Begin;