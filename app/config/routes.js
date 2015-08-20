'use strict';

import React from 'react';
import Main from '../components/Main';
import PostList from '../components/PostList';
import { Router, DefaultRoute, Route } from 'react-router';

export default (
  <Route name="app" path="/" handler={Main}>
    <DefaultRoute handler={PostList} />
  </Route>
);
