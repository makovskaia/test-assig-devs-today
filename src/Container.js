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
    this.componentDidMount = this.componentDidMount.bind(this)
    this.getPost = this.getPost.bind(this)

  }
  componentDidMount() {
    this.props.init()
  }
  getPost(id) {
    return this.props.posts[id]
  }
  render() {
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
              <List {...props} posts={this.props.posts} />
            )}
          />
          <Route path={`/post/:id/`} component={ props => (<Post {...props} getPost={this.getPost} />)} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts, isFetching: state.isFetching
});


const mapDispatchToProps = dispatch => ({
  init: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps,
  mapDispatchToProps
)(Container);
