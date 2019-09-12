import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { List as ListOfItems, ListItem } from "@material-ui/core";

const List = ({ posts, isFetching }) =>
  posts && posts.length ? (
    <ListOfItems>
      {posts.map(p => (
        <Link to={{ pathname: `/post${p.id}`, post: posts[p.id] }} className="postLink">
          <ListItem button>
            {p.title ? (p.title.value ? p.title.value : p.title) : "no name"}
          </ListItem>
        </Link>
      ))}
    </ListOfItems>
  ) : (
    <div>Loading...</div>
  );

const mapStateToProps = state => ({
  posts: state.posts, isFetching: state.isFetching
});

export default connect(mapStateToProps, undefined)(List);
