//This is the layout of the App --> contains JSX
//It may import other layout components such as <TaskInput /> or <Counter /> --> also contains JSX

import React, { Component } from 'react';
import './App.css';
import TaskInput from "./modules/TaskInput";
import TaskList from "./modules/TaskList";
import SortOptions from "./modules/SortOptions";

class App extends Component {
  render() {
    return(
      <div className="container pt-3">
        <div className="row justify-content-center">
            <TaskInput />
        </div>
        <div className="row justify-content-center">
            <SortOptions />
        </div>
        <div className="container pt-3">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col-2">#</th>
                <th scope="col">Description</th>
                <th scope="col-2">Done?</th>
                <th scope="col-2">Delete button</th>
              </tr>
            </thead>

              <TaskList />

          </table>
        </div>
      </div>
    )
  }
}

export default App;
