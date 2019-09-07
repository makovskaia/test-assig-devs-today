import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const List = ({ posts, onPostClick }) => posts && posts.length ? (
  <ul>{
    posts.map(p => (
      <Link to='/post' onClick={() => {onPostClick(p.id)}}>{
        p.title ? p.title.value ? p.title.value : p.title : 'no name'
        }
      </Link>
    ))
  }</ul>
) : (
  <div>Loading...</div>
)

export default List;