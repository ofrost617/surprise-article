import React from 'react';
import firebase from '../javascripts/firebase.js';
import axios from 'axios'

class AddArticle extends React.Component {
  constructor() {
    super();
    this.state = {
      url: '',
      articleMetaData: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({url: event.target.value});
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    // Here we set up the database
    const articleMetaDataRef = firebase.database().ref('articleMetaData');
    // Then we need to query Link Preview using the url state using axios
    axios.get('http://api.linkpreview.net/?key=5af31b2549e9a9602772d53f84448e1fee3068238405b&q=https://www.google.com')
      .then((response) => {
        this.setState({articleMetaData: response.data}, function() {
          articleMetaDataRef.push(this.state.articleMetaData);
        })
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({
      url: '',
    });
  }

  getMetaData(url) {

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Enter a url here" onChange={this.handleChange}/>
          <button type="submit">Save Article</button>
        </form>
      </div>
    )

  }
}

export default AddArticle