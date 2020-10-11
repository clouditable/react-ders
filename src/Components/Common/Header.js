import React from 'react';
import {useSelector} from "react-redux";

export const Header = () => {
  const {todos} = useSelector(state => ({todos: state.todos}))

  const todoCount = todos.data.length;
  return (
    <div style={{backgroundColor: "yellow"}}>
      <ol>
        <li>
          <a href="/todos">Todos {todoCount}</a>
        </li>
        <li>
          <a href="/movies">Movies</a>
        </li>


      </ol>
    </div>

  )
}
