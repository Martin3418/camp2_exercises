import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, NavLink } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>
      Home
    </h2>
  </div>
)

const About = () => (
  <div>
    <h2>
      About
    </h2>
  </div>
)
const Article = ({match}) => (
  <div>
    <h2>
      This is article: {match.params.articleId}
    </h2>
  </div>
)

const Articles = ({ match }) => (
  <div>
    <h2>List of articles</h2>
    <ul>
      <li>
        <NavLink to={`${match.url}/42`} className="normal" activeStyle={{ textDecoration: 'underline', color: 'red' }} >
          Content of article 1
        </NavLink>
      </li>
      <li>
        <NavLink to={`${match.url}/1337`} className="normal" activeStyle={{ textDecoration: 'underline', color: 'red' }} >
          Content of following article
        </NavLink>
      </li>
    </ul>

    <Route path={`${match.url}/:articleId`} component={Article}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select an article</h3>
    )}/>
  </div>
)

class Menu extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ul>
          <li><NavLink exact to="/" activeStyle={{ textDecoration: 'underline', color: 'red' }}>Home</NavLink></li>
          <li><NavLink to="/about" activeStyle={{ textDecoration: 'underline', color: 'red' }}>About</NavLink></li>
          <li><NavLink to="/articles" activeStyle={{ textDecoration: 'underline', color: 'red' }}>Articles</NavLink></li>

        </ul>

        <hr width="600" />

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/articles" component={Articles}/>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the homepage</h1>
        </header>
        <Menu title="salut les copains"/>
      </div>
    );
  }
}

export default App;
