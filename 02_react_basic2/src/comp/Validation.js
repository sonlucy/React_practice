import React, {Component} from "react";
import "./Validation.css";


class Validation extends Component {
  // 사용자 입력에 따른 변화값 감지 및 업데이트
  state = {
    password: "", // 패스워드 입력값
    clicked: false, // 버튼 클릭 여부
    vaildated: false // 패스워드 일치 여부
  }

  // 패스워드 입력시 이벤트
  handleChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  // 패스워드 확인 버튼 클릭시 이벤트
  handleClick = (e) => {
    this.setState({
      clicked: true, // 버튼 클릭시 true로 변경
      vaildated: this.state.password === "0000" // 패스워드가 0000일 경우 true로 변경
    });
  }

  // 랜더링
  render() {
    return (
      <div>
        <input id="pwd"
        type="password"
        value={this.state.password}
        onChange={this.handleChange}
        className={this.state.clicked && (this.state.vaildated ? "success": "failure")}
        />
        <button onClick={this.handleClick}>검증하기</button>
      </div>
    )
  }
};

export default Validation;