//This is the mapStateToProps
//It can be divided into several functions

export function mapStateToProps(reduxState) {
  return {
    taskList: reduxState.taskList,
    inputValue: reduxState.inputValue
  }
}
