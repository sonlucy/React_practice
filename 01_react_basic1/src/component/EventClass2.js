// 클래스 컴포넌트로 이벤트를 처리하는 구현하기
// state를 사용해 input을 입력한 값으로 업데이트하기
// 이벤트처리를 임의 메소드에서 처리
import React, {Component} from "react";

class EventClass2 extends Component {
  // state 정의
  state = {
    name: '',
    message: ''
  }
  // onChange 이벤트처리 메소드
  handleChange = (e) => {
    this.setState({
      // 이벤트가 발생한 DOM의 name 속성값으로 state의 키값을 설정
      [e.target.name]: e.target.value
    });
    console.log([e.target.name], e.target.value);
  }
/*   
  handleChangeName = (e) => {
    this.setState({
      // if (e.target.name == 'name') { name: e.target.value }
      // message: e.target.value
      [e.target.name]: e.target.value
    });
  }
  handleChangeMsg = (e) => {
    this.setState({
      // if (e.target.name == 'name') { name: e.target.value }
      // message: e.target.value
      [e.target.name]: e.target.value
    });
  } */

  // onClick 이벤트처리 메소드
  handleClick = () => {
    alert(`${this.state.name}: ${this.state.message}`);
    this.setState({
      name: '',
      message:''}); // state의 name, message값을 초기화
  }

  // onKeyPress 이벤트 처리 메소드(Enter키를 누르면 handleClick 메소드 호출)
  handelKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  }


  render() {
    return (
      <div>
        <h1>이벤트 실습(클래스)</h1>
        <input type='text' name='name' placeholder='아무거나 입력하세요' value={this.state.name} 
        onChange={this.handleChange}/><br></br>
        <input type='text' name='message' placeholder='아무거나 입력하세요' value={this.state.message} 
        onChange={this.handleChange}
        onKeyPress={this.handelKeyPress}/>
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventClass2;