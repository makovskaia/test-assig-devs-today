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
  }
  componentDidMount() {
    this.props.init()
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
              <List {...props} />
            )}
          />
          <Route
            path={`/post${this.state.selectedPost + 1}`}
            render={props => (
              <Post {...props} />
            )}
          />
        </div>
      </Router>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  init: () => dispatch(fetchPosts())
});

export default connect(undefined,
  mapDispatchToProps
)(Container);
