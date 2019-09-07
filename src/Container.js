import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import List from "./List";
import Post from "./Post";
import { connect } from "react-redux";
import { fetchPosts } from "./actions/actions";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPost: null
    };
    this.onPostClick = this.onPostClick.bind(this);
  }
  componentDidMount() {
    this.props.fetch();
  }
  componentDidReceiveProps(props) {
    props.posts.length && this.setState({ posts: props.posts });
  }
  onPostClick(id) {
    return () => {
      this.setState({ selectedPost: id - 1 });
    };
  }
  render() {
    let posts = this.props.posts;
    return (
      <Router>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Link to="/" style={{ cursor: "pointer" }}>
                <Typography variant="h3">Posts</Typography>
              </Link>
              <Link to="/" style={{ marginLeft: "auto" }}>
                <Button color="inherit">List</Button>
              </Link>
            </Toolbar>
          </AppBar>
          <Route
            path="/"
            exact
            render={props => (
              <List {...props} posts={posts} onPostClick={this.onPostClick} />
            )}
          />
          <Route
            path={`/post${this.state.selectedPost + 1}`}
            render={props => (
              <Post {...props} post={posts[this.state.selectedPost]} />
            )}
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  posts: state
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
