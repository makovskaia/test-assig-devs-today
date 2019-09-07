import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import List from './List'
import Post from './Post'
import { connect } from 'react-redux';
import { fetchPosts } from './actions/actions' 
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';

class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedPost: null,
    }
    this.onPostClick = this.onPostClick.bind(this)
  }
  componentDidMount() {
    this.props.fetch()
  }
  componentDidReceiveProps(props) {
    props.posts.length && this.setState({ posts: props.posts })
  }
  onPostClick(id) {
    return () => {
      this.setState({ selectedPost: id - 1 })
    }
  }
  render() {
    let posts = this.props.posts
    return (
      <Router>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Link to="/list" style={{ cursor: 'pointer' }}>
                <Typography variant="h3">
                  Posts
                </Typography>
              </Link>
              <Link to="/list" style={{ marginLeft: 'auto' }}>
                <Button color="inherit">
                  List
                </Button>
              </Link>
            </Toolbar>
          </AppBar>
          <Route
            path="/list"
            render={props => <List {...props} posts={posts} onPostClick={this.onPostClick} />}
          />
          <Route
            path="/post/"
            render={props => <Post {...props} post={posts[this.state.selectedPost]} />}
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  posts: state
})

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Container);
