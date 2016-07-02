import React, { Component, PropTypes } from 'react';
import { reduxForm, initialize } from 'redux-form';
import { fetchBlog, editBlogPost, deleteBlogPost } from '../actions/index';
import { Link } from 'react-router';
import axios from 'axios';

class BlogsEdit extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    this.props.fetchBlog(this.props.params.id)
  }


  onSubmit(formData) {
    console.log('Edit form data...', formData);
    this.props.editBlogPost(this.props.params.id, formData)
    .then(() => {
      this.context.router.push('/');
    })
  }

  onDeleteClick(event) {
    if (confirm('Are you sure you want to delete this blog post?')) {
      this.props.deleteBlogPost(this.props.params.id)
      .then(() => {
        this.context.router.push('/');
      })
    } else {
      event.preventDefault();
    }
  }

  render() {
    const { fields: { author, topic, content, image_url }, handleSubmit } = this.props;
    if(!blog) return (<div>Loading...</div>);

    return (
      <div>

        <div>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form blogItemContainer editForm">
            <Link to="/" className="btn link">Home</Link>
            <Link to={`/blogs/${this.props.params.id}`} className="btn link">Back</Link>
            <button
              onClick={this.onDeleteClick.bind(this)}
              className="btn formButtons">
              Delete
            </button>
            <h1>Edit Writing</h1>
            <div className={`form-group ${author.touched && author.invalid ? 'has-danger' : ''}`}>
              <label>Author</label>
              <div className="text-danger">
                {author.touched ? author.error : null}
              </div>
              <input type="text" className="form-control" {...author} />
            </div>
            <div className={`form-group ${topic.touched && topic.invalid ? 'has-danger' : ''}`}>
              <label>Topic</label>
              <div className="text-danger">
                {topic.touched ? topic.error : null}
              </div>
              <input type="text" className="form-control" {...topic} />
            </div>
            <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
              <label>Content</label>
              <div className="text-danger">
                {content.touched ? content.error : null}
              </div>
              <textarea type="text" className="form-control" {...content} />
            </div>
            <div className={`form-group ${image_url.touched && image_url.invalid ? 'has-danger' : ''}`}>
              <label>Image URL</label>
              <div className="text-danger">
                {image_url.touched ? image_url.error : null}
              </div>
              <input type="text" className="form-control" {...image_url} />
            </div>
            <button type="submit" className="btn formButtons">Submit</button>
            <Link to="/" className="btn formButtons">Cancel</Link>
          </form>
        </div>
      </div>
    )
  }
}


function validate(values) {
  const errors = {};
  if (!values.author) errors.author = 'Please enter author name';
  if (!values.topic) errors.topic = 'Please enter the topic of your writing';
  if (!values.content) errors.content = 'Please enter the content of your writing';
  if (values.content && values.content.length > 1000) errors.content = 'Cannot exceed 1000 characters';
  if (!values.image_url) errors.image_url = 'Please enter an image url for your writing';
  return errors;
}

export default reduxForm({
  form: 'BlogsNewForm',
  fields: ['author', 'topic', 'content', 'image_url'],
  validate: validate
}, (state) => {
  if(state.blogs.blog){
    return {
      initialValues: {
        author: state.blogs.blog.author,
        topic: state.blogs.blog.topic,
        content: state.blogs.blog.content,
        image_url: state.blogs.blog.image_url
      },
    };
  }
}, { fetchBlog, editBlogPost, deleteBlogPost })(BlogsEdit);
