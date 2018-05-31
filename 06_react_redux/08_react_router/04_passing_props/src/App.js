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

const Articles = ({match}) => (
  <div>
    <h2>
      List of articles...
    </h2>
  </div>
)

const author = "Martin";

function Article(props) {

console.log(props);

  return (
    <div>
      <h2>
        This is article #{props.match.params.articleId} written by {props.author}.
      </h2>
    </div>
  )
}

function Menu() {
  return (
  <div>
    <ul>
      <li><NavLink exact to="/" activeStyle={{ textDecoration: 'underline', color: 'red' }}>Home</NavLink></li>
      <li><NavLink to="/about" activeStyle={{ textDecoration: 'underline', color: 'red' }}>About</NavLink></li>
      <li><NavLink to="/articles" activeStyle={{ textDecoration: 'underline', color: 'red' }}>Articles</NavLink></li>
    </ul>

    <hr width="600" />

    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/articles" component={Articles}/>
    <Route path="/articles/:articleId" render={(routerProps) => <Article {...routerProps} author="Martin"/>} />
  </div>
  )
}

function SomeComponent(props) {

  return (
    <div>
      {Object.keys(props).map(prop =>
        <div>{prop}</div>
      )}
    </div>
  );
}

function App(props) {
  const someObject = {
    oneKey: 1,
    twoKey: 2,
    threeKey: 3
  };

  return (
    <div>
      <SomeComponent {...someObject} />
      <Menu />
    </div>

  );
}

export default App;
