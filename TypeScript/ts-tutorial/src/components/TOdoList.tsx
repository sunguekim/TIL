import * as React from 'react';
import TodoItem from './TOdoItem';

const TodoList = ()=>{
    const todos=[
        {
            id:1,
            text:'Context API 배우기',
            done:true
        },
        {
            id:2,
            text:'TypeScript 배우기',
            done:true
        },
        {
            id:3,
            text:'TypeScript와 Context API  함께 사용하기',
            done:false
        }
    ];


    return(
        <ul>
            {todos.map(todo=>(
                <TodoItem todo={todo} key={todo.id}/>
            ))}
        </ul>
    )
}

export default TodoList;

