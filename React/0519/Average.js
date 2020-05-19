import React, { useState, useMemo } from 'react';

const getAverage = (numbers) => {
    console.log('평균값 계산중')
    if (numbers.length == 0) return 0;
    const sum = numbers.reduce((a, b) => a + b)
    return sum / numbers.length;
}

const Average = () => {
    const text = React.createRef();
    const [list, setList] = useState([])
    const [number, setNumber] = useState('');

    const onChange = e => {
        setNumber(e.target.value);
    }

    const onInsert = e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('')
        text.current.focus();
    };

    const avg = useMemo(()=>getAverage(list),[list])
    return (
        <div>
            <input value={number} onChange={onChange} ref={text} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((n, k) => { return <li key={k}>{n}</li> })}
                <div><b>평균값:</b>{avg}</div>
            </ul>
        </div>
    )
}

export default Average;