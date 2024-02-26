import './App.css';
import React, {useRef, useState, useMemo, useCallback} from 'react';
import InputSample from './comp/InputSample';
import UserList from './comp/UserList';
import CreateUser from './comp/CreateUser';

// 사용자 등록수를 확인하는 함수
const countActiveUsers = (users) => {
  return users.filter(user => user.active).length
}


function App() {

  // CreateUser 콤퍼넌트에서 입력된 값에 대한 상태 관리(input)
  const [input, setInputs] = useState({
    username: '',
    email: ''
  });
  const {username, email} = input; // 비구조화 할당을 통해 값 추출

  // 입력 값에 대한 상태 관리
  const onChange = (e) => {
    const {name, value} = e.target; // e.target에서 name과 value 추출
    setInputs({
      ...input, // 기존의 input 객체를 복사
      [name]: value // name 키를 가진 값을 value로 설정
    });
  };

  // UserList 컴포넌트에서 배열을 관리(기존 사용자 목록 관리)
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);

  // 배열에 항목 추가하기
  const nextId = useRef(4)
  const onCreate = () => {
    // 배열에 추가할 항목을 생성
    const user = {
      id: nextId.current,
      username,
      email
    };

    // 기존의 배열에 새로운 항목을 추가
    // setUsers(users.concat(user)); 
    setUsers([...users, user]); // 기존의 배열을 복사하고, 새로운 항목을 추가

    // input 상자 초기화
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1; // 다음 추가를 위한 id값 증가
  };

  // 배열에서 항목 제거하기(CRUD: Delete)
  const onRmove = (id) => {
    // 삭제해야할 id를 제외한 나머지 원소를 추출하여 새로운 배열 생성
    setUsers(users.filter(user => user.id !== id));
  };

  // 배열에서 항목을 토글하기(CRUD: Update)
  const onToggle = (id) => {
    setUsers(
      users.map(user => 
        user.id === id ? {...user, active: !user.active}:user)
    )
  };

  // const count = countActiveUsers(users);
  // useMemo를 사용해 연산한 값 재사용하기
  // uses 배열이 바뀔 때만 호출(user.active, 새로운 사용자 등록 등의 경우에만)
  const count = useMemo(()=>countActiveUsers(users), [users]);
  return (
    <div>
      {/* <InputSample /> */}
      {/* 컴포넌트 호출시 props를 이동해 데이터 및 함수 전달 */}
      <CreateUser 
        username={username} // props로 전달할 값
        email={email} 
        onChange={onChange} // props로 전달할 함수
        onCreate={onCreate}
      />
      <UserList users={users} onRmove={onRmove} onToggle={onToggle}/>
      <div>활성 사용자 수: {countActiveUsers(users)}</div>
    </div>
  );
}

export default App;