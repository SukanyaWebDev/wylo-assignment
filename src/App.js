import React, { Component } from 'react';
import PostsDisplay from './components/PostsDisplay';
import { PostsContext } from './context/postsContext';
import Header from './components/Header';
import './App.css'

class App extends Component {
  state = { posts: [{
    title: "Exploring the Wonders of Nature", content: "Nature offers countless wonders that captivate our senses and inspire our souls. From majestic mountains to serene forests, there is something truly magical about the great outdoors"
},{
  title: "The Fascinating World of Birds", content: "Birds are among the most diverse and intriguing creatures on our planet. From the vibrant colors of parrots to the majestic flight of eagles, each species offers something unique. In this post, we will explore various types of birds, their habitats, and their behaviors."
},{
  title: "Test Title3", content: "dummu one"
}] }
  addPost = (post) => {
    this.setState((prevState) => ({
      posts: [...prevState.posts, post],
    }));
  };

  editPost = (index, updatedPost) => {
    const posts = [...this.state.posts];
    posts[index] = updatedPost;
    this.setState({ posts });
  };

  render() {
    const { posts } = this.state
    return (
      <PostsContext.Provider value={{ posts, editPost: this.editPost, addPost: this.addPost }}>
        <div className='home'>
          <Header />
          <PostsDisplay />
        </div>
      </PostsContext.Provider>
    );
  }
}

export default App;
