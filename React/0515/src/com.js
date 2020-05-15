import React, { Component } from 'react';


export default class Com extends Component {
    state = {  }

    render() { 
        let {name,age}=this.props
        console.log(name)
        return ( 
            <div>
            <h1>
                {name},
                {age}
            </h1>
        </div>
         );
    }
    
}
 
