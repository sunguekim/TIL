import React, { Component, useState } from 'react';

const Ex2 = () => {

    const String = ['aaaa', 'bbbb', 'cccc', 'dddd', 'eeee', 'ffff', 'gggg', 'hhhh', 'iiiii', 'jjjjj']

    const [input, setInput] = useState('')
    const Test = () => {
        let a = Math.floor(Math.random() * 9);
        setInput(String[a])
    }
    return (
        <div>
            <input value={input} />
            <button onClick={Test}>test</button>
        </div>
    )
}
export default Ex2;