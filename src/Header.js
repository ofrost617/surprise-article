import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <h1 className="tagline">{this.props.tagline}</h1>
        <h2>Got lots of saved articles and no time to choose? Let us help you out!</h2> 
      </header>
    )
  }
}

export default Header;