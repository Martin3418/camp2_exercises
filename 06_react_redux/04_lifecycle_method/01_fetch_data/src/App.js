import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

function fetchDog() {
  return fetch("https://random.dog/woof.json")
  .then(response => response.json())
}

class DogApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greetings: "Hi there",
      image: null,
    };
  }
  refreshDog = () => {
      return fetchDog()
        .then(data => this.setState({image : data.url}))
    }
  render() {
    return (
      <div className="App">
        <h1>{this.state.greetings}</h1>
        <button img={this.state.image} onClick={this.refreshDog}>Find a new dog</button>
        <div>
          {this.state.image
            ? <img src={this.state.image} />
            : null
          }
        </div>
      </div>

    );
  }

  componentDidMount() {
    fetchDog()
    .then(data => this.setState({image : data.url}))
  }

}

export default DogApp;
