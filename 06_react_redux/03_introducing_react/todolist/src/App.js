import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: ["task 1 to test"],
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    let newList = this.state.list.concat(this.state.value);
    console.log(this.state.list);
    event.preventDefault();
    this.setState({list: newList, value: ""});
  }

  displayList() {

    return this.state.list.map(element =>
      <div className="custom-control custom-checkbox" key={element}>
      <input type="checkbox" className="custom-control-input" id="customCheck1" />
      <label className="custom-control-label" htmlFor="customCheck1">{element}</label>
      </div>
    )

  }



  render() {
    return (

      <div className="container col-6">
      <form onSubmit={this.handleSubmit}>
      <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange}/>
      <input type="submit" value="Add" />
      </form>
      <h4>List of tasks</h4>
      {this.displayList()}
      </div>
    );
  }
}

export default App;
