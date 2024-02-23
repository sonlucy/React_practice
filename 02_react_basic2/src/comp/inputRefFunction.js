// 함수에서 ref 사용하기(Hooks => useRef() 사용)
import React, {useState, useRef} from "react";

const InputRefFunction = () => {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: ""
  });
  
// useRef()로 ref 생성
  const nameInput = useRef();
  const {name, nickname} = inputs;

  // 메서드(함수) 생성
  const onChange = (e) => {
    const {name, value} = e.target; // 이벤트가 발생한 DOM의 이름과 값 추출
    setInputs({
      ...inputs, // 기존의 input 객체 복사
      [name]: value // name 키를 가진 값을 value로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: ""
    })
    nameInput.current.focus(); //useRef()로 생성한 ref에 접근
  }

  return (
    <div>
      {/* useRef()로 정의한 이름을 input 태그에 적용: ref = {nameInput} */}
      <input name="name" placeholder="이름" ref={nameInput}
      value={name} onChange={onChange} />
      <input name="nickname" placeholder="닉네임"
      value={nickname} onChange={onChange}/>
      <button onClick={onReset}>초기화</button>
      <br/>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>

    </div>
  )
}

export default InputRefFunction;