import React,{ useState } from 'react';

const TodoForm = ()=>{
    const [value,setValue] = useState('')
    const onSubmit = (e:React.FormEvent)=>{
        e.preventDefault()
        setValue('')
    }
    return(
        <form onSubmit={onSubmit}>
            <input
                value={value}
                placeholder='일정을 입력해주세요'
                onChange={e=>setValue(e.target.value)}
            />
            <button>등록</button>
        </form>
    )
}

export default TodoForm;