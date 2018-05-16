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
  
  // This works also with cDM- work out which lifecycle method to use
  // Used cWM here as using a setup that is done at runtime- getting data from firebase API, but the 
  // that cDM works here too suggests that maybe getting this data can't *only* be done at runtime.
  // Changed back to cDM as 'You may see people using componentWillMount to start AJAX calls to load 
  // data for your components. Don’t do this'
  // Inside cDM 'Basically, here you want to do all the setup you couldn’t do without a DOM, and 
  // start getting all the data you need'
  componentDidMount() {
    this.getRandomArticle()
  }


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