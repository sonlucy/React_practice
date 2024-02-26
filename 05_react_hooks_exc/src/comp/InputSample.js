// hooks useRef: 특정 DOM을 선택할 때 사용할때 사용(DOM에 이름을 달아줄 때 사용)
// hooks useState: input 상태 관리(입력 값에 대한 변화를 관리)
// 참조: https://reactjs.org/docs/hooks-reference.html#useref

import React, { useRef, useState } from 'react';

function InputSample() {
  // 컴포넌트에서 특정 값을 관리할 때 사용(입력에 대한 상태 관리)
  // const [name, setName] = useState('');
  // const [nickname, setNickname] = useState('');
  const [inputs, setInputs] = useState({ // 객체 형태로 관리
    name: '',
    nickname: ''
  });

  const {name, nickname} = inputs; // 비구조화 할당을 통해 값 추출

  // useRef를 사용하여 DOM에 이름을 달아줌
  const inputName = useRef();

  // name, nickname 값이 변화할 때마다 호출하는 함수
  const onChange = (e) => {
    const {name, value} = e.target; // e.target에서 name과 value 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사
      [name]: value // name 키를 가진 값을 value로 설정
    });
  };

  // 초기화 버튼을 눌렀을 때 호출하는 함수
  const onReset = () => {
    setInputs({
      name: '',
      nickname: ''
    });

    // 초기화 버튼을 눌렀을 때 name input에 포커스
    inputName.current.focus();    
  };

  return(
    <div>
      <input type='text' name='name' value={name} placeholder='이름'
        onChange={onChange} ref={inputName}/>
      <br/>
      <input type='text' name='nickname' value={nickname} placeholder='닉네임'
        onChange={onChange}/>
      <br/>
      <button onClick={onReset}>초기화</button>
    </div>
  )

};

export default InputSample;