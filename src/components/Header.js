import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <h1 className="appname">{this.props.appname}</h1>
      </header>
    )
  }
}

export default Header;