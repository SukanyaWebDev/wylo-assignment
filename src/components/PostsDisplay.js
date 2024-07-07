import React, { Component } from 'react';
import { PostsContext } from '../context/postsContext';
import PostItem from './PostItem';
import CreatePost from './CreatePost';
import Modal from 'react-modal';
import './total.css'

// Set the app element for accessibility
Modal.setAppElement('#root');

class PostsDisplay extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <PostsContext.Consumer>
        {({ posts }) => (
          <div className='pHome'>
            <button onClick={this.toggleModal} className='create-post1'>
              {this.state.showModal ? 'Cancel' : 'Create Post'}
            </button>
            <Modal
              isOpen={this.state.showModal}
              onRequestClose={this.closeModal}
              contentLabel="Create Post Modal"
              className="modal"
              overlayClassName="overlay"
            >
              <CreatePost onPostSubmit={this.closeModal} />
            </Modal>
            <div id='postDiaplay'>
              <h1>Posts Site By Sukanya</h1>
              <div className='postsDisplay'>
                {posts.map((post, index) => (
                  <PostItem key={index} index={index} post={post} />
                ))}
              </div>
            </div>
          </div>
        )}
      </PostsContext.Consumer>
    );
  }
}

export default PostsDisplay;
