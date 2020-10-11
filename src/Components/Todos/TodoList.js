import  React  from "react";

import  {TodoListItem} from "./TodoListItem";
import {useSelector} from "react-redux";

export const TodoList = () => {

  const {todos} = useSelector(state => ({todos: state.todos}))
  const todoList = todos.data
  return (
    <div>
      {todoList.map(todoItem => (<TodoListItem todo={todoItem}/>))}
    </div>
  )
}
