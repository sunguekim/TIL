import React,{Component} from 'react';

//기본 컴포넌트 방식
// class Myname extends Component{
    
//     render(){
//         return(
//             <div>
//                 리액트 this 사용해보는 중입니다
//         this는:<b>{this.props.name}</b>입니다
//             </div>
//         )
//     }
// }

// Myname.defaultProps = {
//     name:'기본이름'
// }
const Myname = ({name})=>{
    return (
        <div>
            함수형 컴포넌트 테스트입니다 이름은 {name}입니다
        </div>
    );
};
export default Myname;
