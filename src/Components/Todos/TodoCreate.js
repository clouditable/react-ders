import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodoService} from "../../services/todos";

export const TodoCreate = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleChangeTitle = (event) => {
   const newTitle = event.target.value;
   setTitle(newTitle);
  }




  const saveTodo = (title) => {
    dispatch(addTodoService({title}));
  }

  return (
    <div>
    <input placeholder="todo title" type="text"  style={{marginTop: 10}} onChange={(event) =>handleChangeTitle(event) }/>
    <button onClick={() => saveTodo(title)}>Save</button>
  </div>)
}
