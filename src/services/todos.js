import {addTodoAction, removeTodoAction} from "../actions/todos";


export const addTodoService = ({title}) => {
  return async (dispatch) => {
    const todoItem = {title};
    dispatch(addTodoAction({todoItem}))
  }
}


export const removeTodoService = ({title}) => {
  return async (dispatch) => {
    dispatch(removeTodoAction({title}))
  }
}
