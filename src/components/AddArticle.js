import React from 'react';

class AddArticle extends React.Component {
  constructor() {
    super();
    this.state = {url: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({url: event.target.value});
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Enter a url here" onChange={this.handleChange}/>
          <button type="submit">Save Article</button>
        </form>
      </div>
    )

  }
}

export default AddArticle