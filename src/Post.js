import React from 'react';

const Post = ({ post }) => {
  return (
    <div>{post ? post.id : 'no such post'}</div>
  );
}

export default Post;