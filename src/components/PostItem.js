import React, { Component } from 'react';
import { PostsContext } from '../context/postsContext';
import EditPost from './EditPost';
import './total.css'

class PostItem extends Component {
  state = {
    isEditing: false,
  };

  toggleEdit = () => {
    this.setState((prevState) => ({ isEditing: !prevState.isEditing }));
  };

  render() {
    const { post, index } = this.props;
    const { isEditing } = this.state;
    return (
      <PostsContext.Consumer>
        {({ editPost }) => (
          <div>
            {isEditing ? (
              <EditPost
                post={post}
                index={index}
                closeEdit={this.toggleEdit}
              />
            ) : (
              <div className='post'>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <button onClick={this.toggleEdit} className='editButton'>Edit</button>
              </div>
            )}
          </div>
        )}
      </PostsContext.Consumer>
    );
  }
}

export default PostItem;
