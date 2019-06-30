import React, {Component} from 'react';
//import logo from './logo.svg';
import './assets/css/App.css';
import './assets/css/basic.css';
import Home from './components/Home'
import Pcontentent from './components/Pcontentent'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      
      <Router>
      
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Pcontentent">About</Link>
          </li>
         
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/Pcontentent/:id" component={Pcontentent} />
        
      
      </Router>
      
    );
  }
}

export default App;
