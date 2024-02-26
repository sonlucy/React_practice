// CRUD: Create
// 배열에 데이터를 추가하는 방법

import React from "react";

// App에서 props로 받아온 값을 사용(값, 함수)
// => 전달시 사용한 이름으로 props 비구조화 할당에 사용
const CreateUser = ({username, email, onChange, onCreate}) => {
  return (
    <div>
      <input name="username" value={username} placeholder="이름"
        onChange={onChange}/>
      <input name="email" value={email} placeholder="이름"
        onChange={onChange}/>
      <button onClick={onCreate}>등록</button>
    </div>
  )
};

export default CreateUser;