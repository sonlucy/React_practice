// useReducer을 이용한 input 상태 관리
// input 태그에 name 값을 할당하고 e.target.name을 참조하여 setState를 해준 것과 유사하게 처리

import React, {useReducer} from "react";

// 리듀서 함수(상태 업데이트에 따라 다른 작업 수행)
const reducer = (state, action) => {
  return {
    ...state, // 기존 상태값을 복사, ...은 spread 연산자
    [action.name]: action.value
  }
}


// 컴포넌트 생성
const InfoReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: ''
  });

  const { name, nickname } = state; // 비구조화 할당을 통해 state 안의 값을 추출

  const onChange = e => {
    dispatch(e.target); // 이벤트 객체를 그대로 dispatch를 통해 액션으로 사용
  };

  return (
    <div>
      <div>
        <input type='text' name='name' onChange={onChange} value={name} placeholder='이름'/><br/>
        <input type='text' name='nickname' onChange={onChange} value={nickname} placeholder='닉네임' />
      </div>
      <div>
        <p>이름: {name}</p>
        <p>닉네임: {nickname}</p>
      </div>
    </div>
  );

};

export default InfoReducer;