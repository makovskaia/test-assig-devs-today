import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
  }
  componentWillMount() {
    this.props.fetch()
  }
  componentWillReceiveProps(props) {
    props.posts.length && this.setState({ posts: props.posts })
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
            <Link to="/">List</Link>
            <Link to="post">Post</Link>
          </div>
          <Route path="/" exact component={List} />
          <Route path="/post/" component={Post} />
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
