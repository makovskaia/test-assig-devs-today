import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import List from './List'
import Post from './Post'
import { connect } from 'react-redux';
//temp
import { fetchPosts, addPosts } from './actions/actions' 


class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: props.posts,
      selectedPost: null,
      pending: false,
    }
    this.onPostClick = this.onPostClick.bind(this)
  }
  componentWillMount() {
    this.props.fetch()
  }
  componentWillReceiveProps(props) {
    props.posts.length && this.setState({ posts: props.posts })
  }
  onPostClick(id) {
    this.setState({ selectedPost: id })
  }
  render() {
    let posts = this.props.posts
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            henlo
          </div>
          <div clssName="links">
            <Link to="/list">List</Link>
          </div>
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
