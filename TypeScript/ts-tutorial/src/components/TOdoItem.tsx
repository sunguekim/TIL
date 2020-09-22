import * as React from 'react';
import './Todoitem.css'

export type TodoItemProps={
    todo:{
        id:number;
        text:string;
        done:boolean;
    }
}

const TodoItem=({todo}:TodoItemProps)=>{
    return(
        <li className={`TodoItem ${todo.done?'done':''}`}>
            <span className="text">{todo.text}</span>
            <span className="remove">(X)</span>
        </li>
    )
}
export default TodoItem;