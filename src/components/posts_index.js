import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class PostsIndex extends Component {

  render() {
    return (
      <div>
        Posts Index!
      </div>
    )
  }
}


export default connect(null, null)(PostsIndex);
