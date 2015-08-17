var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var Main = React.createClass({
  render: function() {
    return (
      <div className="main-container">
        <nav className="navbar navbar-default rn-nav" role="navigation">
          <div clasName="navbar-header">
            <a className="navbar-brand">React News</a>
          </div>
        </nav>
        <div className="container">
          <RouteHandler />
        </div>
      </div>
    )
  }
});

module.exports = Main;
