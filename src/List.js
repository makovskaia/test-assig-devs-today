import React from "react";
import { Link } from "react-router-dom";
import { List as ListOfItems, ListItem } from "@material-ui/core";

const List = ({ posts, onPostClick }) =>
  posts && posts.length ? (
    <ListOfItems>
      {posts.map(p => (
        <Link to="/post" onClick={onPostClick(p.id)} className="postLink">
          <ListItem button>
            {p.title ? (p.title.value ? p.title.value : p.title) : "no name"}
          </ListItem>
        </Link>
      ))}
    </ListOfItems>
  ) : (
    <div>Loading...</div>
  );

export default List;
