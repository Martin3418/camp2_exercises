//each function exports an object (includes one or many keys)
//every object is an action
//action will be called in a handler

export function addTask(task) {
  return {
    type: "ADD_TASK",
    value: task,
  }
}

export function handleChange(task) {
  return {
    type: "HANDLE_CHANGE",
    value: task
  }
}

export function checkTask(id) {
  return {
    type: "TASK_DONE",
    id: id
  }
}

export function deleteTask(id) {
  return {
    type: "DELETE_TASK",
    id: id
  }
}

export function showNotCompleted() {
  return {
    type: "SHOW_NOT_COMPLETED"
  }
}

export function showCompleted() {
  return {
    type: "SHOW_COMPLETED"
  }
}

export function showAll() {
  return {
    type: "SHOW_ALL"
  }
}
