import { createStore } from "redux";

const INCREMENT = {
  counterKey: 1,
  type: "INCREMENT" ,
}

const DECREMENT = {
  counterKey: 1,
  type: "DECREMENT",
}

const initialState = {
  counter: 0
}

function changeCounter(state = initialState, action) {
  // console.log(state);
  // console.log(action);
  let newState;
  switch (action.type) {
    case "INCREMENT":
      newState = state.counter + 1;
      return {
        ...state,
        counter: newState
      }
    case "DECREMENT":
    newState = state.counter - 1;
    return {
      ...state,
      counter: newState
    }
    default:
      return state
  }
}

const store = createStore(changeCounter);

export default store;
