import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline, } from 'react-icons/md';
import cn from 'classnames'
import './TodoListitem.scss'

const TodoListitem = ({ todo,onRemove,onToggle }) => {
    const {id,text,checked} = todo;
    return (
        <div className="TodoListitem">
            <div className={cn('checkbox', { checked })} onClick={()=>{onToggle(id)}}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={()=>onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    )
}
export default TodoListitem