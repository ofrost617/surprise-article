import React from 'react';
import { withRouter} from 'react-router-dom';
import AddArticle from './AddArticle';
import '../css/Styles.css';

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
        <section>
          <h2>Too many articles and no time to choose?</h2>
          <h2>Let us help you out</h2>
          <p>Click below to begin</p>
          <button className="goToRandomArticle" type="button"onClick={this.goToArticleSelector}>Give me an article</button>
        </section>
        <br/>
        <section className="addArticle">
          <p>Want to add an article? Add a url below and click save</p>
          <AddArticle/>
        </section>
      </div>
    )
  }
}

export default withRouter(Begin);