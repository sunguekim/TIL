import React, { Component, useState } from 'react';
import './App.css';
import './MyName'
import './st0515'
import Com from './com';


class App extends Component {
    state = {}
    render() {
        return (
            <div>
                <Bpp />
                <Cpp />
            </div>
        );
    }
}

class Bpp extends Component {
    state = { num: 100, }

    f1 = () => {
        this.setState(() => ({ num: this.state.num + 1 }))
    }

    render() {
        return (
            <div>
                <button onClick={this.f1}>{this.state.num}</button>
            </div>
        );
    }
}

//useState 함수형 컴포넌트에서 state사용
//함수를 선언할떄는 const를 선언해야한다
const Cpp = () => {
    const [num, setNum] = useState(100)
    const [name, setName] = useState('')
    const f1 = () => {
        setNum(num + 1)
    }
    const f2 = (e) => {
        setName(e.target.value)
    }
    return (
        <div>
            <button onClick={f1}>{num}</button><br></br>
            <input type="text" value={name} onChange={f2} />
            <button onClick={()=>setName('')}>지우기</button>
            <h1>{name}</h1>
        </div>
    );
}




// class App extends Component {

//     // state = { n: 1, msg: 'horangE', }
//     // f1=(e)=>{
//     //     console.log(1,e)
//     //     console.log(2,e.target)
//     //     console.log(3,e.target.value)
//     // }
//     // f1 = (e) => {
//     //     this.setState({ msg: e.target.value })
//     // }

//     render() {
//         return (
//             //     //숫자를 전달할떄는 {}를 사용한다
//             //     <div className="react">
//             //         <button onClick={() => this.setState({ n: this.state.n + 1 })} >{this.state.n}</button><br />
//             //         <input type="text" value={this.state.msg} onChange={this.f1} />
//             //         <button onClick={() => this.setState({ msg: '' })}>지우기</button>
//             //         <h2>{this.state.msg}</h2>
//             //         <Com2 />
//             //     </div>
//             // )
//             <div>
//                 <Com1 />
//                 <Com2 />
//                 <Com3 />
//                 <Com4 />
//                 <Com5 name="com5" />
//                 <Com6 name="com6" />
//                 <Com7 name="com7" />
//                 <Com8 name="com8" />
//             </div>
//         )
//     }
// }

// function App () {

//     // state = { n: 1, msg: 'horangE', }
//     // f1=(e)=>{
//     //     console.log(1,e)
//     //     console.log(2,e.target)
//     //     console.log(3,e.target.value)
//     // }
//     // f1 = (e) => {
//     //     this.setState({ msg: e.target.value })
//     // }


//         return (
//             //     //숫자를 전달할떄는 {}를 사용한다
//             //     <div className="react">
//             //         <button onClick={() => this.setState({ n: this.state.n + 1 })} >{this.state.n}</button><br />
//             //         <input type="text" value={this.state.msg} onChange={this.f1} />
//             //         <button onClick={() => this.setState({ msg: '' })}>지우기</button>
//             //         <h2>{this.state.msg}</h2>
//             //         <Com2 />
//             //     </div>
//             // )
//             <div>
//                 <Com1 />
//                 <Com2 />
//                 <Com3 />
//                 <Com4 />
//                 <Com5 name="com5" />
//                 <Com6 name="com6" />
//                 <Com7 name="com7" />
//                 <Com8 name="com8" />
//             </div>
//         )

// }
// const App=()=> {

//     // state = { n: 1, msg: 'horangE', }
//     // f1=(e)=>{
//     //     console.log(1,e)
//     //     console.log(2,e.target)
//     //     console.log(3,e.target.value)
//     // }
//     // f1 = (e) => {
//     //     this.setState({ msg: e.target.value })
//     // }


//         return (
//             //     //숫자를 전달할떄는 {}를 사용한다
//             //     <div className="react">
//             //         <button onClick={() => this.setState({ n: this.state.n + 1 })} >{this.state.n}</button><br />
//             //         <input type="text" value={this.state.msg} onChange={this.f1} />
//             //         <button onClick={() => this.setState({ msg: '' })}>지우기</button>
//             //         <h2>{this.state.msg}</h2>
//             //         <Com2 />
//             //     </div>
//             // )
//             <div>
//                 <Com1 />
//                 <Com2 />
//                 <Com3 />
//                 <Com4 />
//                 <Com5 name="com5" />
//                 <Com6 name="com6" />
//                 <Com7 name="com7" />
//                 <Com8 name="com8" />
//             </div>
//         )

// }
// const App= ()=>(

//     // state = { n: 1, msg: 'horangE', }
//     // f1=(e)=>{
//     //     console.log(1,e)
//     //     console.log(2,e.target)
//     //     console.log(3,e.target.value)
//     // }
//     // f1 = (e) => {
//     //     this.setState({ msg: e.target.value })
//     // }



//             //     //숫자를 전달할떄는 {}를 사용한다
//             //     <div className="react">
//             //         <button onClick={() => this.setState({ n: this.state.n + 1 })} >{this.state.n}</button><br />
//             //         <input type="text" value={this.state.msg} onChange={this.f1} />
//             //         <button onClick={() => this.setState({ msg: '' })}>지우기</button>
//             //         <h2>{this.state.msg}</h2>
//             //         <Com2 />
//             //     </div>
//             // )
//             <div>
//                 <Com1 />
//                 <Com2 />
//                 <Com3 />
//                 <Com4 />
//                 <Com5 name="com5" />
//                 <Com6 name="com6" />
//                 <Com7 name="com7" />
//                 <Com8 name="com8" />
//             </div>


// )



// class Com1 extends Component {
//     state = {}
//     render() {
//         return (
//             <div>
//                 <h1>com1</h1>
//             </div>);
//     }
// }

// function Com2() {
//     return (
//         <div>
//             <h1>com2</h1>
//         </div>);
// }

// const Com3 = () => {
//     return (
//         <div>
//             <h1>com3</h1>
//         </div>
//     )
// }

// const Com4 = () => (
//     <div>
//         <h1>com4</h1>
//     </div>
// )


// class Com5 extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.name}</h1>
//             </div>);
//     }
// }
// function Com6(props) {
//     return (
//         <div>
//             <h1>{props.name}</h1>
//         </div>);

// }
// const Com7 = (props) => {
//     return (
//         <div>
//             <h1>{props.name}</h1>
//         </div>
//     )
// }

// const Com8 = (props) => (
//     <div>
//         <h1>
//             <h1>{props.name}</h1>
//         </h1>
//     </div>
// )


// class Com2 extends Component {
//     state = { name: "kim", age: 25, }
//     render() {
//         return (
//             <div className="react">
//                 {this.state.name},
//                 {this.state.age},
//                 <button onClick={() => this.setState({ age: this.state.age + 1 })}>{this.state.age}</button>
//             </div>
//         );
//     }
// }


// // class Study2 extends Component {

// //     state = {n:10,n2:20,n3:30}
// //     //setState는 비동기함수
// //     f1 = ()=>{
// //         const {n} = this.state;
// //         this.setState({
// //             n:n+1
// //         })
// //     }
// //     //
// //     f2=()=>{
// //         this.setState(({n})=>({
// //             n:n-1
// //         }))
// //     }

// //     f3=()=>{
// //         this.setState({
// //             n3:this.state.n3+1
// //         })
// //         console.log(this.state.n3)
// //     }

// //     render() { 
// //         return (  
// //             <div>
// //                 <h1>{this.state.n}</h1>
// //                 <button onClick={this.f1}>+</button>
// //                 <button onClick={this.f2}>-</button>
// //                 <button onClick={this.f3}>{this.state.n3}</button>
// //             </div>
// //         );
// //     }
// // }





// // class Com3 extends ends Component {

// //     //static defaultPros는 예약 키워드이다
// //     static defaultProps ={name:"koko",age:999}
// //     render() {
// //         let { name, age } = this.props
// //         console.log(name,age)
// //         return (
// //            <div>
// // //                 <h1>
// // //                     {name},{age}
// // //                 </h1>
// // //             </div>
// //         );
// //     }

// // }


// // class Com extends Component {
// //     render() { 
// //         //1.프롭스는 복사대입을 할수있다 =>let{}
// //         //2.프롭스는 타입 검증 할수있다
// //         //3.프롭스는 필수 속성을 설정할수있다 =>isRequire
// //         //4.프롭스는 읽기전용이다=데이터 갱신을 할수없다
// //         let{age}=this.props //비구조화 할당
// //         age++;
// //         return (
// //             <div>
// //                 <h1>
// //                     {age},{this.props.age}
// //                 </h1>
// //             </div>
// //          );
// //     }
// // }



export default App;