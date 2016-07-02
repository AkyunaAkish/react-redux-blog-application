import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlog } from '../actions/index';
import { Link } from 'react-router';

class BlogsShow extends Component {

  componentWillMount() {
    this.props.fetchBlog(this.props.params.id);
  }

  render() {
    const { blog } = this.props;
    if(!blog) return (<div className="loader">Loading...</div>);

    return (
      <div>
        <Link to="/" className="btn link">Home</Link>
        <Link to={`/blogs/${this.props.params.id}/edit`} className="btn link">Edit Writing</Link>


        <div>
          <div className="container blogItemContainer blogShow">
            <div className="row-fluid">

              <div className="col-lg-12" >
                <div className="item">
                  <div className="content">
                    <img src={blog.image_url} />
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="item">
                  <div className="content">
                    <h1>Author</h1>
                    <p>{blog.author}</p>
                    <h1>Title</h1>
                    <p>{blog.topic}</p>
                    <h1>Content</h1>
                    <p>{blog.content}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { blog: state.blogs.blog };
}

export default connect(mapStateToProps, { fetchBlog })(BlogsShow);
