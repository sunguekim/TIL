import React, { Component } from 'react';
import './App.css';
import './Myname'
import Myname from './Myname';
import './Counter'
import Counter from './Counter';
class App extends Component{
  render(){
    return (
      <div className="App">
        <Myname  name="리액트" />
     
        <Counter />
      </div>
    )
  }
}

export default App;
