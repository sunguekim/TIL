import './App.css';
import React, { Component } from 'react';
import Result from './pages/result.js'
import Survey from './survey.js'
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleon: true,
      color: 'white'
    }
    this.f1 = this.f1.bind(this)
  }
  componentDidUpdate(p,s) { 
    const {color} = this.state
    if(p.color !==color){
      const bodyElt = document.querySelector("body");
      bodyElt.style.backgroundColor=color;
    }
  }

  f1() {
    this.setState(state => ({
      isToggleon: !state.isToggleon
    }))
    if (this.state.isToggleon) {
      this.setState(v => ({
        color: '#333333'
      }))
       document.getElementById('font').style.color="white"
    } else {
      this.setState(v => ({
        color: 'white'
      }))
      document.getElementById('font').style.color="black"
    }
   
  }



  render() {
    return (
      <Router> 
        <Button className="left-align" onClick={this.f1}>{this.state.isToggleon ? '다크모드ON' : '다크모드OFF'}</Button>
        <div className="container text-center">
          <h1 id="font">설문조사</h1>
      
            <Link to="/">
              <Button  variant="outline-primary">설문</Button>
            </Link>
            <Link to="/result">
              <Button variant="outline-primary">결과보기</Button>
            </Link>
 
          <Switch>
            <Route path="/result" component={Result} />
            <Route path="/" component={Survey} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;