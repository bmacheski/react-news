var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
require('../styles/Main.css')

var Main = React.createClass({
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

module.exports = Main;
