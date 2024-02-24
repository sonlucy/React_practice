
// useReducer : 다양한 상태를 다른 값으로 업데이트 할때 사용하는 Hook
// 장점 : 상태 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있음

import React, { useReducer } from 'react';

// 리듀서 함수(상태 업데이트에 따라 다른 작업 수행)
const Reducer = (state, action) => {
  switch (action.type) { // action.type에 따라 다른 작업 수행
    case 'INCREMENT':
      return {
        value: state.value + 1
      };
    case 'DECREMENT':
      return {
        value: state.value - 1
      };
    default:
      return state;
  }
};

const CounterReducer = () => {
  // useReducer 함수를 사용하여 상태값을 설정
  // [state, dispatch] = useReducer(리듀서함수, 기본값);
  // state : 현재 상태값, dispatch : 액션을 발생시키는 함수
  const [state, dispatch] = useReducer(Reducer, {value: 0});

  const onIncrease = () => {dispatch({type: 'INCREMENT'})}
  const onDecrease = () => {dispatch({type: 'DECREMENT'})}

  return (
    <>
      <p>현재 숫자 값은 <b>{state.value}</b>입니다.</p>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </>
  )
};

export default CounterReducer;