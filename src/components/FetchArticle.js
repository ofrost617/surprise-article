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
        <section>
          <img className="thumbnail" src={this.state.randomArticle.thumbnail}/>
          <h2 className="articleTitle">{this.state.randomArticle.title}</h2>
          <h3 className="articleDescription">{this.state.randomArticle.description}</h3>
          <button type="button" onClick={this.refreshPage}>Twist</button>
          <button type="button" onClick={() => window.open(this.state.randomArticle.url)}>Stick</button>
          </section>
      </div>
    )
  }
}

export default FetchArticle;

{/* <Route path='/privacy-policy' component={() => window.location = 'https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies'}/> */}
//  Look into using the above as an alternative to line 53