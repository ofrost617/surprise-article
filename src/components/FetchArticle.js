import React from 'react';
import firebase from '../javascripts/firebase.js';
import articleMetaDataRef from './AddArticle';


class FetchArticle extends React.Component {
  constructor() {
    super();
    this.state = {
      randomArticle: []
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
        <img className="thumbnail" src={this.state.randomArticle.thumbnail}/>
        <h2>{this.state.randomArticle.title}</h2>
        <h3>{this.state.randomArticle.description}</h3>
        <button type="button" onClick={this.refreshPage}>Twist</button>
        <button type="button" onClick={() => window.open(this.state.randomArticle.url)}>Stick</button>
      </div>
    )
  }
}

export default FetchArticle;