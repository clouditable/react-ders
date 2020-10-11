import React, {useState, useEffect} from 'react';
import './App.css';

import {TodoCreate} from "./TodoCreate";
import {TodoList} from "./TodoList";
const sleep = m => new Promise(r => setTimeout(r, m))

const getFakeTodos=  (async () => {
    console.time("Slept for")
    await sleep(3000)
    return  [{title: "A"}, {title: "B"}, {title: "C"}, {title:"D"}]
  })


function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading]= useState(true);

  // componentDidMount
  /*useEffect(() => {
    getFakeTodos().then(response => {
      setTodos(response)
    }).finally(() => {
      setIsLoading(false)
    })
  },[])*/

  // componentDidUpdate
  useEffect(() => {
    if(todos.length === 3) {
      setIsLoading(false)
      alert("todos count 3")
    }
  }, [todos.length])

  const saveTodo = (title) => {
    const newTodos =[...todos, {title}]
    setTodos(newTodos)
  }
  return (
    <div className="App">
      <TodoCreate saveTodo={saveTodo}/>
      {isLoading ? <p>Loading...</p>:   <TodoList todoList={todos}/>}
    </div>
  );
}

export default App;
