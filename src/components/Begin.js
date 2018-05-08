import React from 'react';

class Begin extends React.Component {
  goToArticle() {
    console.log('Trying to go to article');
  }
  render() {
    return (
      <div>
        <h1>Welcome to Article Blackjack!</h1>
        <h2>Got lots of saved articles and no time to choose? Let us help you out</h2>
        <p>Click below to begin</p>
        <button type="button" onClick={this.goToArticle}>Give me an article</button>
      </div>
    )
  }
}

export default Begin;