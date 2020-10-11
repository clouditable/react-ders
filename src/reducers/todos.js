import {ADD_TODO, REMOVE_TODO} from "../contansts/todos";


export const todoInitialState = {
  data: [],
  isLoading: false,
}

export default (state = todoInitialState, action) => {

  switch (action.type) {
    case  ADD_TODO:
      const {todoItem} = action.payload;
      const newTodos = [...state.data, todoItem];
      return {...state, data: newTodos}

    case REMOVE_TODO:
      const {title} = action.payload;
      const todos = state.data.filter(item => item.title !== title);
      return {...state, data: todos};


    default:
      return  state;
  }
}
