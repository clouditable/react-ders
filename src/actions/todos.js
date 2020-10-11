import {ADD_TODO, REMOVE_TODO} from "../contansts/todos";

export const addTodoAction = (payload) => ({
  type: ADD_TODO,
  payload
});


export const removeTodoAction = (payload) => ({
  type: REMOVE_TODO,
  payload
})
