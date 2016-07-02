import axios from 'axios';

export const FETCH_BLOGS = 'FETCH_BLOGS';
export const FETCH_BLOG = 'FETCH_BLOG';
export const EDIT_BLOG = 'EDIT_BLOG';
export const CREATE_BLOG = 'CREATE_BLOG';
export const DELETE_BLOG = 'DELETE_BLOG';

const ROOT_URL = 'http://localhost:3000/api/v1';

export function fetchBlogs() {
  const request = axios.get(`${ROOT_URL}/blogs`);

  return {
    type: FETCH_BLOGS,
    payload: request
  }
}

export function fetchBlog(id) {
  const request = axios.get(`${ROOT_URL}/blogs/${id}`);

  return {
    type: FETCH_BLOG,
    payload: request
  }
}

export function createBlogPost(blogData) {
  const request = axios.post(`${ROOT_URL}/blogs`, blogData);

  return {
    type: CREATE_BLOG,
    payload: request
  }
}

export function editBlogPost(id, newData) {
  const request = axios.put(`${ROOT_URL}/blogs/${id}`, newData);

  return {
    type: EDIT_BLOG,
    payload: request
  }
}

export function deleteBlogPost(id) {
  const request = axios.delete(`${ROOT_URL}/blogs/${id}`);

  return {
    type: DELETE_BLOG,
    payload: request
  }
}
