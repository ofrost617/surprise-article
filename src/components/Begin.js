import React from 'react';
import PropTypes from 'prop-types';

class Begin extends React.Component {
  // constructor() {
  //   super();
  //   this.goToArticle = this.goToArticle.bind(this);
  // }
  // This is the same as .bind(this on in the onClick but I've used the other way ay I'm only going to be rendering the begin component once on the page)

  goToArticle(event) {
    // event.preventDefault(); do I need this?
    // using the imperative API rather than redirect component
    this.props.history.push(`article`)

  }
  render() {
    return (
      <div>
        <h1>Welcome to Article Blackjack!</h1>
        <h2>Got lots of saved articles and no time to choose? Let us help you out</h2>
        <p>Click below to begin</p>
        <button type="button" onClick={this.goToArticle.bind(this)}>Give me an article</button>
      </div>
    )
  }
}

Begin.contextTypes = {
  router: PropTypes.object
}

export default Begin;