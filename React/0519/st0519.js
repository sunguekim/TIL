import React, { useState } from 'react';

const Ex1 =()=>{
    const  tiger = React.createRef();
    const [name, setName] = useState([
        { text: 'hoho' },
        { text: 'haha' },
        { text: 'hihi' },
    ]);
    const [input,setInput]=useState('')

    const getInput = (e)=>{
        setInput(e.target.value)
    }
    //namelist 제거
    const onRemove = (n) => {
        //특정값을 조회할떄는 filter 메소드 사용
        const temp = name.filter((obj) => { return obj !== n })
        setName(temp)
    }
    //onclick:: js에서 인수를 함수로 전달하고싶으면 람다식을 사용해야한다
    const nameList = name.map((n, k) => { return <li key={k} onClick={()=>{onRemove(n)}}>{n.text}</li> })
    //namelist 추가
    const Input = ()=>{
        setName([
            ...name,
            {text:input},
        ]);
        tiger.current.focus();
        setInput('')
    };
    
    return (
        <div>
            <ul>{nameList}</ul>
            <input value={input} onChange={getInput} ref={tiger}/>
            <button onClick={Input}>추가</button>
        </div>
    )
}

export default Ex1;