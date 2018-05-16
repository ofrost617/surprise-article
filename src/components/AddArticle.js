import React from 'react';
import firebase from '../javascripts/firebase.js';
import axios from 'axios'

class AddArticle extends React.Component {
  constructor() {
    super();
    this.state = {
      url: '',
      status: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({url: event.target.value});
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    const articleMetaDataRef = firebase.database().ref('articleMetaData');
    var apiUrl = 'http://api.linkpreview.net/?key=5af31b2549e9a9602772d53f84448e1fee3068238405b&q=' + this.state.url
    axios.get(apiUrl)
      .then((response) => {
        articleMetaDataRef.push(response.data);
        this.setState({status: 'success'})
        })
      .catch((error) => {
        console.log(error);
        this.setState({status: 'failed'})
      });
    this.setState({
      url: '',
      status: ''
    });
  }
  

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input className="addArticleInput" type="text" placeholder="Enter a url here" onChange={this.handleChange}/>
          <br/>
          <br/>
          <button type="submit">Save Article</button>
        </form>
      </div>
    )

  }
}

export default AddArticle;

// placeholder text is not being reshown after clicking submit, in the console the field is 
// cleared, but in the browser window itself the text is still there