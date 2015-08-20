'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';
import '../styles/Main.css'

export default React.createClass({
  render: function() {
    return (
      <div className="nav-main">
        <nav className="navbar navbar-container" role="navigation">
          <a className="navbar-brand">React News</a>
        </nav>
        <div className="container">
          <RouteHandler />
        </div>
      </div>
    )
  }
});
