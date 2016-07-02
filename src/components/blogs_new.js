import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createBlogPost } from '../actions/index';
import { Link } from 'react-router';

class BlogsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(formData) {
    this.props.createBlogPost(formData)
    .then(() => {
      this.context.router.push('/');
    })
  }

  render() {
    const { fields: { author, topic, content, image_url }, handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form blogItemContainer blogCreateForm">
          <Link to="/" className="btn link">Home</Link>
          <h1>Create Writing</h1>
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
}, null, { createBlogPost })(BlogsNew);
