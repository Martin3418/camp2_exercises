//must import actions

import { addTask, handleChange, checkTask, deleteTask } from "./actions"

export function mapDispatchToProps(dispatch) {
  return {
    inHandlersChange : (task) => dispatch(handleChange(task)),
    inHandlersAdd : (task) => dispatch(addTask(task)),
    inHandlersChecked : (task) => dispatch(checkTask(task)),
    inHandlersDelete : (task) => dispatch(deleteTask(task)),
   }
}
