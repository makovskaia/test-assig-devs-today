import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import List from './List'
import Test from './Test'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/posts'
//temp
import { fetchPosts, addPosts } from './actions/actions' 
//
import Container from './Container'
//for redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
 applyMiddleware(thunk)
));

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: store.getState()
    }
  }
  componentWillMount() {
    store.dispatch(fetchPosts())
  }
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

export default App;
