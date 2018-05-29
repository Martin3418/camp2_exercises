import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)


const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const User = ({match}) => (
  <div>
    <h2>Page with user id: {match.params.user}</h2>
  </div>
)

const NoMatch = () => (

  <div>
    <h2>URL is not defined</h2>
  </div>
)

class Menu extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/:user" component={User}/>
        <Route component={NoMatch}/>
      </Switch>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

          Switch exercise
          <Menu />


      </div>
    );
  }
}

export default App;
