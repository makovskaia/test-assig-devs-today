import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import List from './List'
import Test from './Test'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          henlo
        </div>
        <div clssName="links">
          <Link to="/">Home</Link>
          <Link to="test">Test</Link>
        </div>
        <Route path="/" exact component={List} />
        <Route path="/test/" component={Test} />
      </div>
    </Router>
  );
}

export default App;
