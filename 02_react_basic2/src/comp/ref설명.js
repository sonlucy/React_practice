// HTML에서 id, class 등을 정의하고 CSS, js에서 해당 DOM을 컨트롤 할때 사용
// ref(reference 약자): HTML에서 id를 사용하는 것처럼, 리액트 내부에서 DOM에 이름(id)을 적용하는 방법
// ref는 DOM에 직접 접근해 컨트롤 해야 할때 사용
// HTML의 id: <div id="myDiv"></div> => 고유값, ref: 컴퍼넌트 내부에서만 유효한 이름
// ref를 사용하는 방법: 클래스형(기본) , 함수형(Hooks 사용)

// DOM에서 ref를 사용해야 하는 상황
// 1. 특정 input에 포커스 주기
// 2. 스크롤 박스 조작하기
// 3. Canvas 요소에 그림 그리기 등

// ref 사용법
/*
  1. 콜백 함수를 통한 ref 설정
    fef를 달고자하는 요소에 ref라는 콜백 함수를 props로 전달
    <input ref={(ref)=>{this.input=ref}}/>
*/

// 2. 리액트에 내장되어 있는 createRef 함수 사용(리액트 v16.3부터 도입)
import React, { Component } from 'react'

class RefSample extends Component {
  input = React.createRef();

  handleFocus = () => {
    this.input.current.focus();
  }

  render() {
    return (
      <div>
        <input ref={this.input} />
      </div>
    );
  }
}

export default RefSample;