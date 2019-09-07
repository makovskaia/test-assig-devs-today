import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/posts";
//temp
import { fetchPosts } from "./actions/actions";
//
import Container from "./Container";
//for redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: store.getState()
    };
  }
  componentWillMount() {
    store.dispatch(fetchPosts());
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
