import React from 'react';
import firebase from '../javascripts/firebase.js';


class FetchArticle extends React.Component {
  constructor() {
    super();
    this.state = {
      randomArticle: [],
      // articleHistory: []
    }

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  // Ask Claudia about async await here to avoid hacky page refresh on line 48
   componentDidMount() {
    const articleMetaDataRef = firebase.database().ref('articleMetaData');
    articleMetaDataRef.on('value', (snapshot) => {
      let articleMetaData = snapshot.val();
      let newState = [];
      for (let articleMetaDatum in articleMetaData) {
        newState.push({
          title: articleMetaData[articleMetaDatum].title,
          description: articleMetaData[articleMetaDatum].description,
          thumbnail: articleMetaData[articleMetaDatum].image,
          url: articleMetaData[articleMetaDatum].url
        });
      }
      var randomArticle = newState[Math.floor(Math.random()*newState.length)];
      this.setState({
        randomArticle: randomArticle,
        // articleHistory: this.state.articleHistory.concat(randomArticle)        
      });
    });
  }

  refreshPage() { 
    window.location.reload(); 
  }

  // openLink(url) {
  //   window.open(url);
  // }

  render() {
    return (
      <div>
        <section>
          <img className="thumbnail" src={this.state.randomArticle.thumbnail} alt="Thumbnail cannot be displayed at this time"/>
          <h2 className="articleTitle">{this.state.randomArticle.title}</h2>
          <h3 className="articleDescription">{this.state.randomArticle.description}</h3>
          <br/>
          <br/>
          <button className="twistButton" type="button" onClick={this.refreshPage}>Twist</button>
          <button className="stickButton" type="button" onClick={() => window.open(this.state.randomArticle.url)}>Stick</button>
          </section>
      </div>
    )
  }
}

export default FetchArticle;


// component will update
// gloabal application state held within universal redux state to track previous articles