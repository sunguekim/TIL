import React, { Component, useState, useMemo } from 'react';
import Ex1 from './st0519'
import Ex2 from './test'
import Average from'./Average'

//1번
//
// const Focus = ()=>{
//     const  tiger = React.createRef();

//     const setFocus = ()=>{
//         tiger.current.focus();
//         setMsg('')
//     }
//     const getMsg = (e)=>{
//         setMsg(e.target.val)
//     }
//     //F2를 누르면 페이지 요소값을 한번에 변경가능!
//     //input 초기값을 선언하면 매입력마다 초기화가 되기떄문에 onchange로 입력값을 갱신받아야한다
//     const[msg,setMsg] =useState('')

//     return(
//         <div>
//             <input  onChange={getMsg} value={msg} ref={tiger} />
//             <button onClick={setFocus}>hi</button>
//         </div>
//     )
// }


// const Input = () => {
//     const [name, setName] = useState([

//     ])
//     const nameList = name.map((n, k) => { return <li key={k}>{n.text}</li> })

//     const f1 = ()=>{
//         setName([
//             ...name,
//             {text:'호랑이'},
//         ]);
//     };
//     return (
//         <div>
//             <h1>{nameList}</h1>
//             <button onClick={f1}>추가</button>
//         </div>
//     )
// }


// const App = () => {

//     const [name, setName] = useState([
//         { text: 'hoho' },
//         { text: 'haha' },
//         { text: 'hihi' },
//     ])
//     const onRemove = (k) => {
//         //특정값을 조회할떄는 filter 메소드 사용
//         const temp = name.filter((obj, index) => { return index !== k })
//         setName(temp)
//     }
//     //onclick:: js에서 인수를 함수로 전달하고싶으면 람다식을 사용해야한다
//     const nameList = name.map((n, k) => { return <li key={k} onClick={()=>{onRemove(k)}}>{n.text}</li> })

//     return (
//         <div>

//             {/* <Ex1/> */}
//             <Ex2/>
//         </div>
//     )
// }
// export default App;



// const App = () => {
//     const[list,setList]=useState([10,20,30])
//     //useMemo는 데이터 갱신이 있을때 함수를 콜해준다
//     const f1 = ()=>{
//         let sum=0;
//         // setList([...list,40])
//         setList(list)

//         for (const item of list) {
//             sum+=item
//         }
//         console.log(sum)
//     }

//     return (
//         <div>
//             <button onClick={f1}>plus</button>
//         </div>
//     )
// }

const App = () => {
    const [list, setList] = useState([10, 20, 30])

    const f1 = () => {
        setList(list)
    }

    const f2 = () => {
        setList([
            ...list,
            40
        ])
    }

    //객체의 변동이생겨 useMemo를 콜하게됨
    const f3 = () => {
        setList([
            ...list,
        ])
    }

    const f4 = ()=>{
        let ar = [10,20]
        let br = ar
        br[0]=30
        br[1]=40
        console.log(ar[0])
        console.log(ar[1])
        let cr = [10,20]
        let dr = [...cr]
        dr[0]=30;
        dr[1]=40;
        console.log(cr[0],cr[1])
    }

    const sum = useMemo(
        () => {
            let sum = 0
            for (const i of list) {
                sum += i
            }
            console.log(sum)
            return sum;
        }, [list])

    return (
        <div>
            {/* <button onClick={f1}>버튼1</button><br />
            <button onClick={f2}>버튼2</button><br />
            <button onClick={f3}>버튼3</button><br />
            <button onClick={f4}>버튼4</button><br />
            <h1>{sum}</h1> */}
            <Average/>
        </div>
    )
}

export default App;