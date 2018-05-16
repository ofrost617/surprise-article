import React from 'react';
import Header from './Header';
import AddArticle from './AddArticle';
import '../css/Styles.css';

class Begin extends React.Component {

  goToArticleSelector = (event) => {
    this.props.history.push(`article`);
  }
  
  render() {
    return (
      <div>
        <Header appname="Welcome to Article Blackjack!"/>
        <br/>
        <section>
          <h2>Too many articles and no time to choose?</h2>
          <h2>Let us help you out</h2>
          <p>Click below to begin</p>
          <button id="goToRandomArticle" type="button" onClick={this.goToArticleSelector}>Give me an article</button>
        </section>
        <br/>
        <section className="addArticle">
          <p className="addArticleCta">Want to add an article? Add a url below and click save</p>
          <AddArticle/>
        </section>
      </div>
    )
  }
}

export default Begin;