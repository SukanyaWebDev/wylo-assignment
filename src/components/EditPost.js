import React, { Component } from 'react';
import { PostsContext } from '../context/postsContext';
import './total.css'

class EditPost extends Component {
  state = {
    title: this.props.post.title,
    content: this.props.post.content,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (editPost, e) => {
    e.preventDefault();
    const { title, content } = this.state;
    const { index, closeEdit } = this.props;
    if (title && content) {
      editPost(index, { title, content });
      closeEdit();  // Close the edit form after submission
    }
  };

  render() {
    const { title, content } = this.state;
    return (
      <PostsContext.Consumer>
        {({ editPost }) => (
          <form onSubmit={(e) => this.handleSubmit(editPost, e)}>
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
            <button type="submit" className='create-post'>Save</button>
            <button type="button" onClick={this.props.closeEdit} className='create-post'>Cancel</button>
          </form>
        )}
      </PostsContext.Consumer>
    );
  }
}

export default EditPost;
