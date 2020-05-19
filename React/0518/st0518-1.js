import React, { useState } from 'react';

const Ex4 = () => {
    const text = React.createRef()
    const [name, setName] = useState([
        { text: 'kim' },
        { text: 'sun' },
        { text: 'gue' },
    ])
    const nameList = name.map((n, k) => <li key={k} onClick={() => { f3(k) }} >{n.text}</li>)
    const [input, setInput] = useState('')

    const f1 = (e) => {
        setInput(e.target.value)
    }

    const f2 = (e) => {
        setName([
            ...name,
            { text: input }
        ]
        )
        setInput('')
        text.current.focus();
    }

    const f3 = (k) => {
        const temp = name.filter((obj, index) => { return index !== k })
        setName(temp)
    }

    return (
        <div>
            <ul>{nameList}</ul>
            <input onChange={f1} value={input} ref={text} />
            <button onClick={f2}> input</button>
        </div>
    )

}

export default Ex4;