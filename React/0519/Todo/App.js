import React, { useState, useRef, useCallback } from 'react';
import './App.css';
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'

const App = () => {
  const[todos,setTodos]=useState([
    {
      id:1,
      text:'리액트',
      checked:true,
    },{
      id:2,
      text:'투두',
      checked:true,
    },{
      id:3,
      text:'리스트',
      checked:false,
    },
  ])
  const nextID = useRef(4);

  const onToggle = useCallback(
    (id)=>{setTodos(
       todos.map((todo)=>todo.id===id?{...todo,checked:!todo.checked}:todo)
    )
    },
    [todos]
  )

  const onRemove = useCallback(
    id=>{
      setTodos(todos.filter((todo)=>{return todo.id !==id}))
    },
    [todos]
  )

  const onInsert = useCallback(
    text=>{
      const todo = {
        id:nextID.current,
        text,
        checked:false
      };
      setTodos(todos.concat(todo));
      nextID.current+=1
    },
    [todos]
  )
  return (
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    
  )
}

export default App;