import React, {useState} from "react";

export const TodoCreate = ({saveTodo}) => {
  const [title, setTitle] = useState("");

  const handleChangeTitle = (event) => {
   const newTitle = event.target.value;
   setTitle(newTitle);
  }


  return (
    <div>
    <input placeholder="todo title" type="text"  style={{marginTop: 10}} onChange={(event) =>handleChangeTitle(event) }/>
    <button onClick={() => saveTodo(title)}>Save</button>
  </div>)
}
