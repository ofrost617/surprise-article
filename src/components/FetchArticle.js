import React from 'react';
import firebase from '../javascripts/firebase.js';

class FetchArticle extends React.Component {
  constructor() {
    super();
    this.state = {
      randomArticle: []
    }

    this.handleClick = this.handleClick.bind(this);
  }

  getRandomArticle() {
    const articleMetaDataRef = firebase.database().ref('articleMetaData')
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
        randomArticle: randomArticle
        // articleHistory: this.state.articleHistory.concat(randomArticle)        
      });
    })    
  }

  handleClick() {
    this.getRandomArticle();
  }
  
  // componentDidMount() {
  //   this.getRandomArticle()
  // }

  // refreshPage() { 
  //   window.location.reload(); 
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
          <button className="twistButton" type="button" onClick={this.handleClick}>Twist</button>
          <button className="stickButton" type="button" onClick={() => window.open(this.state.randomArticle.url)}>Stick</button>
          </section>
      </div>
    )
  }
}

export default FetchArticle;


// component will update
// gloabal application state held within universal redux state to track previous articles