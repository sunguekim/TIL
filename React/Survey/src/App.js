import './App.css';
import React, { Component } from 'react';
import Result from './pages/result.js'
import Survey  from './survey.js'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route ,Link,Switch } from "react-router-dom";


class App extends Component {

  render() {
    return (
      <Router>
       <div className="container text-center">
        <h1>설문조사</h1>

        <Link to="/">
          <Button variant="outline-primary">설문</Button>
        </Link>
        <Link to="/result">
        <Button variant="outline-primary">결과보기</Button>
        </Link>

        <Switch>
        <Route path="/result" component={Result}/>
        <Route path="/" component={Survey}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;