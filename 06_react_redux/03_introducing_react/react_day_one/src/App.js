// eslint-disable-next-line
import React, {component} from 'react';
import _ from "underscore";
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import "./product.js";


class Hello extends React.Component {
  render() {
    return <div>Hello, World</div>
  }
};


export default Hello;

ReactDOM.render(
  <Hello name="World" />,
  document.getElementById("app")
);
