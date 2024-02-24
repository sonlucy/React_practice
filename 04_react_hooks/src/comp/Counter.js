/* 
 * useState 
    - 가장 기본적인 Hook
    - 함수형 컴포넌트에서 상태를 관리할 수 있게 해줌
*/

// useReducer : 다양한 상태를 다른 값으로 업데이트 할때 사용하는 Hook


import React, { useState } from 'react';

const Counter = () => {
  // useState 함수를 사용하여 상태값을 설정
  // const [상태값, 상태를 설정하는 함수] = useState(상태의 기본값);
  const [value, setValue] = useState(0);

  // 이벤트 핸들러 함수(상태값 변경)
  const onIncrease = () => {setValue(value + 1)};
  const onDecrease = () => {setValue(value - 1)};

  return (
    <>
      <p>현재 숫자 값은 <b>{value}</b>입니다.</p>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </>
  )
};

export default Counter;