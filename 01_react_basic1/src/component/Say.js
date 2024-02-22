// 함수형 컴포넌트에서 state 사용하기
// state를 사용하려면 useState를 사용하여야 함
// useState를 사용하는 과정에서 Hooks라는 기능을 사용하는 것
// useState는 16.8버전에서 새로 도입된 기능

import React, { useState } from "react";

const Say = () => {
  // useState: 함수형 컴포넌트에서 state 사용(비구조화 할당)
  // useState함수를 호출시 첫번째 원소는 상태값, 두번째 원소는 상태를 바꾸어 주는 함수
  const [message, setMessage] = useState('준비');
  const [color, setColor] = useState('black');

  // 이벤트 함수 정의
  const onClickEnter = () => setMessage('안녕하세요!');  // 입장 버튼 클릭시
  const onClickLeave = () => setMessage('안녕히 가세요!'); // 퇴장 버튼 클릭시

  // 함수형 컴포넌트에서 랜더링 시에는 return문을 통해 뷰를 반환
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{color}}>{message}</h1>
      <h1 style={{color: 'red'}} onClick={() => setColor('red')}>빨간색</h1>
      <h1 style={{color: 'green'}} onClick={() => setColor('green')}>초록색</h1>
      <h1 style={{color: 'blue'}} onClick={() => setColor('blue')}>파란색</h1>
    </div>
  );
};

export default Say;