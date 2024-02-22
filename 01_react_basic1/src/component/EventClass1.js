// 클래스 컴포넌트로 이벤트를 처리하는 구현하기
// state를 사용해 input을 입력한 값으로 업데이트하기
// 이벤트처리를 COM 객체에서 처리
import React, {Component} from "react";

class EventClass1 extends Component {
  // state 정의
  state = {
    message: ''
  }
  render() {
    return (
      <div>
        <h1>이벤트 실습(클래스)</h1>
        <input type='text' name='message' placeholder='아무거나 입력하세요'
          onChange={(e) => {  // e: 이벤트 객체, e.target: 이벤트가 발생한 DOM
            // console.log(e.target.value);
            this.setState({ message: e.target.value }); // state의 message 값을 변경된 데이터로 업데이트
          }
        }/>
          <button onClick={() => {
          alert(this.state.message);
          this.setState({ message: '' }); // state의 message 값을 초기화
        }}>확인</button>
      </div>
    );
  }
}

export default EventClass1;