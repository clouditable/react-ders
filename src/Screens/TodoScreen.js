import React from "react";

import {TodoCreate} from "../Components/Todos/TodoCreate"
import {TodoList} from "../Components/Todos/TodoList"

export const TodoScreen = () => {

  return (
    <div style={{background: "wheat"}}>
      <TodoCreate />
      <TodoList />
    </div>
  )
}
