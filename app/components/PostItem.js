var React = require('react');
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');

var PostItem = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function() {
    return {
      postItem: {}
    }
  },
  componentDidMount: function() {
    var ref = new Firebase(`https://hacker-news.firebaseio.com/v0/item/${this.props.id}`);
    this.bindAsObject(ref, 'postItem')
  },
  render: function() {
    return (
      <li>
        <a href={this.state.postItem.url} target="_blank">{this.state.postItem.title}</a>
        <p>{this.state.postItem.score} points</p>
      </li>
    )
  }
});

module.exports = PostItem;
