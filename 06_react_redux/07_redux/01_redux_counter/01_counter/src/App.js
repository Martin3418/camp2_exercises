import React, { Component } from 'react';
import { Provider } from "react-redux";
import './App.css';
import { connect } from "react-redux";
import store from "./store";

class App extends Component {

  counter(props) {
    return (
      <div>
        <h4>{this.props.counter}</h4>
      </div>
    )
  };

  buttons() {
    return(
      <div>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
      </div>
    )
  };

  render() {
    return (
      <div>
        <h2>This is a counter</h2>

        {this.counter()}
        {this.buttons()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { counter: state.counter }
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({ counterKey: 1, type: 'INCREMENT' }),
    decrement:() => dispatch({ counterKey: 1, type: 'DECREMENT' })
   }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;
