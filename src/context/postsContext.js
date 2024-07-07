
import React from 'react';

const PostsContext = React.createContext({
    posts: [], addPost: () => { }, editPost: () => { }
});

export { PostsContext };
