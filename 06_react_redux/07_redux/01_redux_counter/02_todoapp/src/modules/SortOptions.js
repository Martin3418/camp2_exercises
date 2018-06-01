//This is a component of the layout --> contains JSX
//Each component will be included into App to complete the layout

import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../store/tasks/selectors";
import { mapDispatchToProps } from "../store/tasks/handlers";

class SortOptions extends Component {
  showNotCompleted = () => {
    this.props.inHandlersNotComplete();
  }

  showCompleted = () => {
    this.props.inHandlersCompleted();
  }

  showAll = () => {
    this.props.inHandlersAll();
  }

  render() {
    return(
      <div class="container">
        <div className="row">
          {/* <div className="col-3"></div> */}
          <div className="col-2 offset-3 text-center"><a href="#" onClick={this.showNotCompleted}>Not Completed</a></div>
          <div className="col-2 text-center"><a href="#" onClick={this.showAll}>All</a></div>
          <div className="col-2 text-center"><a href="#" onClick={this.showCompleted}>To be deleted</a></div>

        </div>
      </div>
    )
  }
}

const Connected = connect(mapStateToProps, mapDispatchToProps)(SortOptions);
export default Connected;
