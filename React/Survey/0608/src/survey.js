import React, { Component } from 'react';

import { Button } from 'react-bootstrap';
import axios from "axios"
class Survey extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gender: '',
      animal: '',
      // img: {
      //   tiger: require('./img/tiger.jpg'),
      //   ele: require('./img/ele.jpg'),
      //   egle: require('./img/egle.jpg'),
      // },
      img: '',
    }
  }

  componentDidUpdate() {
    const info = document.getElementById('font').style
    console.log(info.color)
    if (info.color === 'white') {
      document.getElementById('fset1').style.color = 'white'
      document.getElementById('fset2').style.color = 'white'
      document.getElementById('f11').style.color = 'white'
      document.getElementById('f22').style.color = 'white'

    } else {
      document.getElementById('fset1').style.color = 'black'
      document.getElementById('fset2').style.color = 'black'
      document.getElementById('f11').style.color = 'black'
      document.getElementById('f22').style.color = 'black'
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
    if (e.target.value === 'tiger') {
      this.setState({
        img: require('./img/tiger.jpg')
      })
    } else if (e.target.value === 'ele') {
      this.setState({
        img: require('./img/ele.jpg')
      })
    } else if (e.target.value === 'egle') {
      this.setState({
        img: require('./img/egle.jpg')
      })
    }else{
      this.setState({
        
      })
    }
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


  render() {
    return (
      <div className="App">
        <h2 id="fset1">성별선택</h2>
        <hr />
        <form id="f11">
          <input type="radio" value="man" name="gender" onChange={this.onChangeG} /><span >남자</span>
          <input type="radio" value="woman" name="gender" onChange={this.onChangeG} /><span >여자</span>
        </form>

        <h2 id="fset2">좋아하는 동물</h2>
        <hr />
        <div>
          <form id="f22">
            <input type="radio" value="tiger" name="animal" onChange={this.onChangeA} />호랑이
           <input type="radio" value="ele" name="animal" onChange={this.onChangeA} />코끼리
           <input type="radio" value="egle" name="animal" onChange={this.onChangeA} />독수리
        </form>
        </div>
        <div>
          <img src={this.state.img} width="200" height="250" />
        </div>

        <Button variant="outline-primary" onClick={this.handleClick}>제출하기</Button>
      </div>
    );
  }
}

export default Survey;