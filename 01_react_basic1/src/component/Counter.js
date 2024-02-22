// state: 클래스형 
// 컴포넌트 내부에서 바뀔 수 있는 값 설정(교재 p65 ~ p66 참고)
// 동적 데이터를 다룰 때 사용

import { Component } from "react";

class Counter extends Component {
  constructor(props) {  // constructor: 컴포넌트의 생성자 메서드
    super(props);  // super: 현재 클래스가 상속받고 있는 부모 클래스의 생성자를 호출
    this.state = {  // state: 컴포넌트의 상태를 정의
      number: 0,
      fixedNumber: 0
    };
  }

  // 클래스형 컴포넌트에서 랜더링 시에는 render함수를 사용
  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회
    // index.html에 전달시 return문을 통해 뷰를 반환
    return (
      <div>
        <h1>바뀌는 값:{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button onClick={() => {
          // this.setState: state 값을 바꿀 때 사용하는 명령어
          this.setState({number: number+1}, () => {
              console.log('방금 setState가 호출되었습니다.');
              console.log(this.state);
              console.log(this.props);
            });
          }
        }>+1</button>
        <button onClick={() => {
          // this.setState: state 값을 바꿀 때 사용하는 명령어
          this.setState({number: number-1}, () => {
              console.log('방금 setState가 호출되었습니다.');
              console.log(this.state);
              console.log(this.props);
            });
          }
        }>-1</button>
      </div>
    );
  }
};

export default Counter;
