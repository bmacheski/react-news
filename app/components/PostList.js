var React = require('react');
var PostItem = require('./PostItem');
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');

var PostList = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function(){
    return {
      topIds: []
    }
  },
  componentDidMount: function() {
    var ref = new Firebase('https://hacker-news.firebaseio.com/v0/topstories').limitToFirst(50);
    this.bindAsArray(ref, 'topIds')
  },
  render: function() {
    return (
      <ol>
        {this.state.topIds.map(function(post) {
          return <PostItem key={post['.key']} id={post['.value']} />
        })}
      </ol>
    )
  }
});

module.exports = PostList;
