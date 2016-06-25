import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import Layout from './components/Layout';
import PostsIndex from './components/posts_index';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={PostsIndex} />

    <Redirect from="*" to="/" />
  </Route>
)
