
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";


const initialState = {
  taskList: [],
  id: 0,
  inputValue: ""
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "HANDLE_CHANGE":
      return {
        ...state,
        inputValue: action.value
      }

    case "ADD_TASK":
      const newTask = {id: state.id+1, label: action.value, checked: false};
      const newTaskList = [ ...state.taskList, newTask ];
      if (newTask.label !== "") {
        return {
          ...state,
          taskList: newTaskList, id: state.id+1, inputValue: ""
      }
        return;
      }

    case "TASK_DONE":
      const changedTaskList = [];
      state.taskList.map(element => {
        if (element.id === action.id) {
          changedTaskList.push({id: element.id, label: element.label, checked: !element.checked});
        } else {
          changedTaskList.push(element)
        }
      }
    )
      return {
        ...state,
        taskList: changedTaskList
      }

    case "DELETE_TASK":
      const reducedTaskList = state.taskList.filter(element => element.id !== action.id)

        return {
        ...state,
        taskList: reducedTaskList
      }

        case "SHOW_ALL":
          const fullList = state.taskList.filter(element => element.checked === false || element.checked === false)
            return {
            ...state,
            taskList: fullList
          }

        case "SHOW_NOT_COMPLETED":
          const notCompletedList = state.taskList.filter(element => element.checked === false)
            return {
            ...state,
            taskList: notCompletedList
          }

        case "SHOW_COMPLETED":
          const completedList = state.taskList.filter(element => element.checked === true)
            return {
            ...state,
            taskList: completedList
          }

    default:
      return state
  }
}


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
