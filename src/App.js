import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Login from './components/LoginButton'

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  state = {
    userId: null,
  }

  render() {
    return (
      <div className="App">

      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">GamerU</h1>
        </header>

        <Router>
          <React.Fragment>
            {/* <Route exact path="/" component={App} /> */}
            <Route exact path="/" component={Login} />
            {/* <Route exact path="/home" component={Home} /> */}
            <Route exact path="/home" render={ (routerProps) => <Home userId={this.state.userId} /> } />


          </React.Fragment>
        </Router>

        
      </div>
    );
  }
}

export default App;
