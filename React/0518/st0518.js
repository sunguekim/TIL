import React, { Component, useState, createRef } from 'react';

class Ex2 extends Component {
    state = {}

    // f1 = () => {
    //     let ar = [5, 6, 7, 8, 9]
    //     let br = ar.map((n) => { return n * n })
    //     let cr = ar.map(
    //         (n, index) => {
    //             console.log({ n, index })
    //             return n * index
    //         })
    //     //filter 조건을 만족하는 값만 걸러줌
    //     let dr = ar.filter((n) => { return n != 7 })
    //     let er = ar.filter((n, index) => { return index !== 3 })
    //     let fr = [3,4,5,6,7]
    //     //reduce는 누적합을 구할떄 사용한다
    //     let gr = fr.reduce((acc, data) => {
    //         console.log(acc,",", data)
    //         return acc + data
    //     })
    //     console.log(ar)
    //     console.log(br)
    //     console.log(cr)
    //     console.log(dr)
    //     console.log(er)
    //     console.log(gr)
    // }



    render() {
        return (
            <div>
                <Ex3 />
            </div>
        );
    }
}

const Ex3 = () => {
    const tiger = React.createRef();

    const [names, setNames] = useState([
        { text: 'hi' },
        { text: 'hello' },
        { text: 'aneyong' },
    ])
    //인수전달을 하고싶으면 람다식을 선언해서 넘겨야한다 onClick 볼것!

    const onRemove = (k) => { 
        const temp = names.filter((obj,index)=>{return index!==k})
        setNames(temp)
    }

    const nameList = names.map((t, k) => <li key={k} onClick={() => onRemove(k)}>{t.text}</li>)

    const f1 = (e) => {
        setNames([
            ...names,
            { text: input }
        ]
        )
        setInput('')
        tiger.current.focus();
    }



    const [input, setInput] = useState('');

    const onChange = (event) => {
        setInput(event.target.value)
        console.log(event.target.value)
    }




    return (
        <div>
            <ul>{nameList}</ul>
            <input value={input} onChange={onChange} ref={tiger} />
            <button onClick={f1} >plus</button>
        </div>
    )
}
export default Ex2;