import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import Layout from './components/Layout';
import BlogsIndex from './components/blogs_index';
import BlogsNew from './components/blogs_new';
import BlogsShow from './components/blogs_show';
import BlogsEdit from './components/blogs_edit';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={BlogsIndex} />
    <Route path="blogs/new" component={BlogsNew} />
    <Route path="blogs/:id" component={BlogsShow} />
    <Route path="blogs/:id/edit" component={BlogsEdit} />
    <Redirect from="*" to="/" />
  </Route>
)
