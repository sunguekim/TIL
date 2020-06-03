import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from "axios"
class Survey extends Component {

    constructor(props) {
        super();
        this.state = {
          gender: '',
          animal: ''
        }
      }
    
      onChangeG = (e) => {
        this.setState({
          gender: e.target.value
        }, console.log(e.target.value))
      }
      onChangeA = (e) => {
        this.setState({
          animal: e.target.value
        }, console.log(e.target.value))
    
      }
    
      handleClick = () => {
        const { gender, animal } = this.state
        console.log(this.state)
        axios.post('/api', {
          gender: gender,
          animal: animal
        })
        alert('설문완료!')
      }
    state = {  }
    render() { 
        return (
            <div className="App">
        <h2>성별선택</h2>
        <hr />
        <form>
          <input type="radio" value="man" name="gender" onChange={this.onChangeG} />남자
           <input type="radio" value="woman" name="gender" onChange={this.onChangeG} />여자
        </form>
        <h2>좋아하는 동물</h2>
        <hr />
        <form>
          <input type="radio" value="tiger" name="animal" onChange={this.onChangeA} />호랑이
           <input type="radio" value="ele" name="animal" onChange={this.onChangeA} />코끼리
           <input type="radio" value="egle" name="animal" onChange={this.onChangeA} />독수리
        </form>
        <p>현재 선택사항:[{this.state.gender},{this.state.animal}]</p>
        
        <Button variant="outline-primary" onClick={this.handleClick}>제출하기</Button>
      </div>
          );
    }
}
 
export default Survey;