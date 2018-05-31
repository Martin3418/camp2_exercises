//This is a component of the layout --> contains JSX
//Each component will be included into App to complete the layout

import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../store/tasks/selectors";
import { mapDispatchToProps } from "../store/tasks/handlers";

class TaskList extends Component {

  handleCheck = (id) => {
    this.props.inHandlersChecked(id)
  }

  handleDelete = (id) => {
    this.props.inHandlersDelete(id)
  }

  render() {
    return(
      <tbody>
        {this.props.taskList.map((oneTask) => {
          return (
            <tr key={oneTask.id}>
              <th scope="row">{oneTask.id}</th>
              <td style={oneTask.checked ? { textDecoration: 'line-through'} : null }>{oneTask.label}</td>
              <td><input type="checkbox" defaultChecked={oneTask.checked} onChange={() => this.handleCheck(oneTask.id)}/></td>
              <td><button hidden={!oneTask.checked} onClick={() => this.handleDelete(oneTask.id)}>Delete task</button></td>
            </tr>
          )
        })
      }
    </tbody>
    )
  }
}

const Connected = connect(mapStateToProps, mapDispatchToProps)(TaskList);
export default Connected;
