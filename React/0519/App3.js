import React, { Component} from 'react';//{ Component, useState, useEffect } 
import Ex from './practice'
import Ex2 from './st0518'
import Ex4 from './st0518-1'
// import ReactDOMServer, { renderToString } from 'react-dom/server';
//ReactDOMServer 배열안의 내용을 콘솔에서 확인하고싶을떄 사용하는 객체 ,{renderToString}을 뒤에 붙여주면 메소드처럼 사용가능하다! ex)renderToString(element)

class App extends Component {
    //ref는 다른곳에서 사용하고싶을때 그 객체를 정의해서 사용하는 메소드이다

    // tiger = React.createRef();

    // f1 = ()=>{
    //     this.tiger.style.background="red";
    // }

    // f1 = ()=>{
    //     console.log(React.version)
    //     this.tiger.current.style.background="red"
    // }
    // f1 = ()=>{
    //     this.tiger.focus();
    // }

    // f1 = ()=>{
    //     this.tiger.current.focus();
    // }

    // constructor(props){
    //     super(props)
    // }

    // f1 = () => {
    //     let ar = [1, 2, 3, 4, 5]
    //     let cr = ['tiger', 'egle', 'ele'];
    //     let dr = cr.map((n) => { return <li>{n}</li> })
    //     let fr = [<h1>호랑이</h1>, '<h1>독수리</h1>', '<h1>코끼리</h1>']

    //     console.log(ar);
    //     console.log(cr);
    //     console.log(dr);
    //     console.log(ReactDOMServer.renderToString(fr));
    //     console.log(renderToString(dr))
    //     console.log(ReactDOMServer.renderToStaticMarkup(dr))


    // }

    state = {}



    render() {
        
        return (
            <div>
                {/* t는 버튼1번 이것을 tiger로 넘겨 버튼1은 this.tiger 가 된다*/}
                {/* <button  ref={(t)=>{this.tiger=t}}>Call</button> */}
                {/* <button ref={this.tiger}>ex1</button>
                <button onClick={this.f1}>ex2</button> */}
                {/* <input ref={this.tiger}/>
                <button onClick={this.f1}>ex2</button> */}
                {/* <button onClick={()=>{this.f1()}}>44</button> */}
                {/* 컴포넌트 ref 사용하기 */}
                {/* <BPP ref={(t)=>{this.tiger=t}}/> */}
                {/* 함수 콜을 할때는 람다식으로 콜한다 */}
                {/* <button onClick={()=>{this.tiger.f1()}}>BPP</button> */}

                {/* <button onClick={()=>{return 100;}}>1000</button>
                <button onClick={()=>100}>500</button>
                <button onClick={()=>{return 100}}>500</button> */}
                {/* <button onClick={this.f1}>map</button> */}
                {/* <ul><Iterator /> </ul> */}
                {/* <NameList />
                <BPP /> */}
                {/* <Ex /> */}
                {/* <Ex2 /> */}
                <Ex4/>

            </div>
        );
    }
}

// const Iterator = () => {
//     const names = ['눈사람', '얼음', '눈', '바람'];
//     const nameList = names.map(name => <li>{name}</li>)
//     return <ul>{nameList}</ul>;
// }

// const Iterator = () => {
//     const names = ['눈사람', '얼음', '눈', '바람'];
//     const nameList = names.map(name => <li>{name}</li>)
//     return nameList;
// }

// const NameList = () => {
//     const [names] = useState([
//         { text: 'snw' },
//         { text: 'ice' },
//         { text: 'eye' },
//         { text: 'win' }
//     ])
//     const nameList = names.map((n, k) => <li key={k}>{n.text}</li>)
//     const f1 = () => {
//         console.log(names)
//     }
//     const f2 =()=>{
//         for (const item of names) {
//             console.log(item);
//         }
//     }
//     return (
//         <div>
//             {/* 태그가 2개이상 들어가면 div태그로 프래그먼트를 해줘야한다 */}
//             <button onClick={f1}>추가</button><br/>
//             <button onClick={f2}>추가2</button>
//             <ul>{nameList}</ul>
//         </div>
//     )
// }



// const NameList = () => {
//     const [names, setNames] = useState([
//         { text: 'snw' },
//         { text: 'ice' },
//         { text: 'eye' },
//         { text: 'win' }
//     ])
//     const nameList = names.map((n, k) => <li key={k}>{n.text}</li>)
//     const f1 = () => {
//         console.log(names)
//     }
//     비동기 함수를 처리할때 디버깅으로 사용하는 메소드
//     useEffect(()=>{
//         for (const item of names) {
//             console.log(item)
//         }
//     });

//     const f2 = () => {
//         for (const item of names) {
//             console.log(item);
//         }
//         ...<-배열 전개연산자
//         setNames([
//             ...names,
//             { text: 'egle' }
//         ]);
//         for (const item of names) {
//             console.log(item)
//         }
//         setNames([
//             //아래가 ...names 전개연산자와 같은결과이다
//             { text: 'snw' },
//             { text: 'ice' },
//             { text: 'eye' },
//             { text: 'win' },
//             {text:'egle'}
//         ]);
//     }


    // const f3 = () => {
    //     names.push({ text: 'egle' })
    // }

//     return (
//         <div>
//             {/* 태그가 2개이상 들어가면 div태그로 프래그먼트를 해줘야한다 */}
//             <button onClick={f1}>추가</button><br />
//             <button onClick={f2}>추가2</button><br />
//             <button onClick={f3}>추가3</button>
//             <ul>{nameList}</ul>
//         </div>
//     )
// }





// class BPP extends Component {
//     state = {}

//     f1 = () => {
//         console.log(1)
//     }


//     render() {
//         const names = ['가', '나', '다', '라']
//         const nameList = names.map((n, k) => <li key={k}>{n}</li>)
//         return (
//             <div>
//                 <ul>{nameList}</ul>
//             </div>
//         );
//     }
// }


export default App;