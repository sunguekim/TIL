import React, { Component } from 'react';

export default class Myname extends Component {
   
    //    f1(){
    //        console.log('f1');
    //    }


    //    f2=function(){
    //         console.log('f2')
    //    }

    //    f3=()=>{
    //     console.log('f3')
    //    }
    // count = 0;

    // f1() {
    //     console.log(this.count)
    // }

    // f2 = function () {
    //     console.log(this.count)
    // }

    // f3 = () => {
    //     console.log(this.count)
    // }

    f1=()=>{
        console.log('click')
    }
    f2=(num)=>{
        console.log(num)
    }
    
    

    render() {
        return (
            <div>
                <button onClick={this.f1}>f1</button>
                <button onClick={this.f2}>f2</button>
                {/* //인수전달할떄는 람다식 형태에서 전달해준다 */}
                <button onClick={()=>{this.f2(100)}}>f2</button>
                <button onClick={this.f3}>f3</button>
            </div>
        );
    }
}


