var React = require('react');
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');
var moment = require('moment');

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
  renderTitle: function() {
    return (
      <a href={this.state.postItem.url} target="_blank">{this.state.postItem.title}</a>
    )
  },
  renderSubText: function() {
    var commentTime = moment(this.state.postItem.time * 1000).fromNow();
    var score = this.state.postItem.score;
    var poster = this.state.postItem.by
    return (
      <div className="subtext-container">
        <span>{score} points by {poster} </span>
        <span> {commentTime}</span>
        <span> | comments </span>
      </div>
    )
  },
  render: function() {
    return (
      <li>
        {this.renderTitle()}
        {this.renderSubText()}
      </li>
    )
  }
});

module.exports = PostItem;
