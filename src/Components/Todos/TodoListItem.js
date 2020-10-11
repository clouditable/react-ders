import React from "react";
import {useDispatch} from "react-redux";
import {removeTodoService} from "../../services/todos";

export const TodoListItem = ({todo}) => {
  const dispatch = useDispatch();
  
  const removeTodo = () => {
    const {title} = todo;

    dispatch(removeTodoService({title}));
  }
  return <div>
    <span>{todo.title}</span>
    <button onClick={removeTodo}>Sil</button>
  </div>
}
