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
  
  componentDidMount() {
    const articleMetaDataRef = firebase.database().ref('articleMetaData');
    articleMetaDataRef.on('value', (snapshot) => {
      let articleMetaData = snapshot.val();
      let newState = [];
      for (let articleMetaDatum in articleMetaData) {
        newState.push({
          title: articleMetaData[articleMetaDatum].title,
          description: articleMetaData[articleMetaDatum].description,
          thumbnail: articleMetaData[articleMetaDatum].title,
          url: articleMetaData[articleMetaDatum].url
        });
      }
      var randomArticle = newState[Math.floor(Math.random()*newState.length)];
      this.setState({
        randomArticle: randomArticle,        
      });
    });
  }



  render() {
    return (
      <div>
        <img className="thumbnail" src="https://images.pexels.com/photos/920115/pexels-photo-920115.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
        <h2>Title</h2>
        <h3>This will be the description of the article</h3>
        <button type="button">Twist</button>
        <button type="button">Stick</button>
      </div>
    )
  }
}

export default FetchArticle;