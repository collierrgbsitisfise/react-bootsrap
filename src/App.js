import React, { Component } from 'react';
import { Link } from 'react-router';

import './styles/app/app.styles.css';

class App extends Component {
  render() {
    return (
      <div className="containerApp">
          {this.props.children}
      </div>
    );
  }
}

export default App;
