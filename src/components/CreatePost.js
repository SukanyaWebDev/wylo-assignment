import React, { Component } from 'react';
import { PostsContext } from '../context/postsContext';
import './total.css'

class CreatePost extends Component {
  state = {
    title: '',
    content: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (addPost, e) => {
    e.preventDefault();
    const { title, content } = this.state;
    if (title && content) {
      addPost({ title, content });
      this.setState({ title: '', content: '' });
      this.props.onPostSubmit();  // Call the function passed via props to hide the form
    }
  };

  render() {
    const { title, content } = this.state;
    return (
      <PostsContext.Consumer>
        {({ addPost }) => (
          <form onSubmit={(e) => this.handleSubmit(addPost, e)}>
            <div className='formContainer'>
              <input
                type="text"
                name="title"
                value={title}
                onChange={this.handleChange}
                placeholder="Title"
              />
              <textarea
              rows={40}
                name="content"
                value={content}
                onChange={this.handleChange}
                placeholder="Content"
              />

            </div>
            <button type="submit" className='create-post'>Create Post</button>
          </form>
        )}
      </PostsContext.Consumer>
    );
  }
}

export default CreatePost;
