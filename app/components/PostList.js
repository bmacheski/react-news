'use strict';

import React from 'react';
import PostItem from './PostItem';
import Firebase from 'firebase';
import ReactFireMixin from 'reactfire';

export default React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function(){
    return {
      topIds: []
    }
  },
  componentDidMount: function() {
    var ref = new Firebase('https://hacker-news.firebaseio.com/v0/topstories').limitToFirst(30);
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
