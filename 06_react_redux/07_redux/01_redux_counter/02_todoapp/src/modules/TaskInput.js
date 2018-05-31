//This is a component of the layout --> contains JSX
//Each component will be included into App to complete the layout

import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../store/tasks/selectors";
import { mapDispatchToProps } from "../store/tasks/handlers";

class TaskInput extends Component {

  handleChange = (event) => {
    this.props.inHandlersChange(event.target.value)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.inHandlersAdd(this.props.inputValue)
    // console.log(this.props);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.props.inputValue} placeholder="Enter a new task" onChange={this.handleChange}/>
        <button type="submit" value="Submit">Add task</button>
      </form>
    )
  }
}

const Connected = connect(mapStateToProps, mapDispatchToProps)(TaskInput);
export default Connected;
