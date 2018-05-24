import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import expenses from "./expenses"
import users from "./users"


// App has `expenses` and `users` as props
class App extends Component {

  render() {
    return (

      <div className="App">
        <table>
          <thead>
            <th>what has been paid</th>
            <th>by whom?</th>
          </thead>
          <tbody>
            {this.props.expenses.map(item => (
            <tr key={item.what}>
              <td>{item.what}</td>
              <td>{this.props.users.find(element => element.id === item.who).name}</td>
            </tr>
          ))}
          </tbody>
          </table>
      </div>
    );
  }


}

export default App;
