import React from "react";
import { Link, Route } from "react-router-dom";
import { List as ListOfItems, ListItem } from "@material-ui/core";
import Post from './Post'

const List = ({ posts, isFetching }) => {
  return !isFetching ? (
    <ListOfItems>
      {posts.map((p, id) => (
        <div>
          <Link to={{ pathname: `/post/${id}/`, state: { op: true } }} className="postLink">
            <ListItem button>
              {p.title ? (p.title.value ? p.title.value : p.title) : "no name"}
            </ListItem>
          </Link>
          
        </div>
      ))}

    </ListOfItems>
  ) : (
    <div>Loading...</div>
  );
}


export default List
