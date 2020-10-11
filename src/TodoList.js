import  React  from "react";

import  {TodoListItem} from "./TodoListItem";

export const TodoList = ({todoList}) => {

  return (
    <div>
      {todoList.map(todoItem => (<TodoListItem todo={todoItem}/>))}
    </div>
  )
}
