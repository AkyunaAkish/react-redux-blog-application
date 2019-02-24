import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlogs } from '../actions/index';
import { Link } from 'react-router';

class BlogsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredBlogs: props.blogs
    }
  }

  componentWillMount() {
    this.props.fetchBlogs()
    .then(() => {
      this.setState({
        filteredBlogs: this.props.blogs
      })
    })
  }

  renderBlogs(blogArr) {
    return blogArr.map((blog) => {
      return (
        <div className="blogPostOuter" key={blog.id}>
          <Link to={`blogs/${blog.id}`}>
            <div className="container blogItemContainer">
              <div className="row-fluid">

                <div className="col-lg-4" >
                  <div className="item">
                    <div className="content">
                      <img className="repeatedImage" src={blog.image_url} />
                    </div>
                  </div>
                </div>

                <div className="col-lg-8">
                  <div className="item">
                    <div className="content">
                      <h1>Author</h1>
                      <p>{blog.author}</p>
                      <h1>Topic</h1>
                      <p>{blog.topic}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </Link>
        </div>
      )
    })
  }

  // if searchTerm is blank then set filteredBlogs to this.props.blogs
  filterResults(searchTerm) {
    if (searchTerm.length < 1) {
      this.setState({
        filteredBlogs: this.props.blogs
      })
    } else {
      this.setState({
        filteredBlogs: this.props.blogs.filter((curr,index,arr) => {
          let termSplit = searchTerm.toLowerCase().split("");
          let currAuthorSplit = curr.author.toLowerCase().split("");
          let currTopicSplit = curr.topic.toLowerCase().split("");

          for (let i = 0; i < termSplit.length; i++) {
            if (currAuthorSplit.indexOf(termSplit[i]) > -1 || currTopicSplit.indexOf(termSplit[i]) > -1) {
              return curr;
            }
          }
        })
      })
    }
  }

  render() {
    return (
      <div>
        <h1 className="writingsHeader">Writings On The Wall</h1>
        <form onSubmit={this.onFormSubmit} className='input-group searchBlogForm'>
          {/*<input
            type="text"
            className='form-control searchInput'
            placeholder='Filter writings'
            onInput={(event) => this.filterResults(event.target.value)}/>*/}
          <Link to="/blogs/new" className="btn link addPost">Add New Writing</Link>
        </form>

        <br/>
        <br/>
        {this.renderBlogs(this.state.filteredBlogs)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {blogs: state.blogs.all};
}

export default connect(mapStateToProps, { fetchBlogs })(BlogsIndex);
