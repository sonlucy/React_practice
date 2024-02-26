
/* function App {
  const users = [{
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
  ];
  return (
    <div>
      <p>id:{users[0].id} {users[0].username} <span>{users[0].email}</span></p>
      <p>id:{users[1].id} {users[1].username} <span>{users[1].email}</span></p>
      <p>id:{users[2].id} {users[2].username} <span>{users[2].email}</span></p>
    </div>
  )
};
 */

// 컴포넌트 내무에서 배열 랜더링하기
// useEffect를 사용하여 마운트/언마운트/업데이트 시 할 작업 설정하기

import React, { useEffect } from "react";

// 사용자 정보 화면 출력 컴포넌트
function User({ user, onRmove, onToggle}) {
  useEffect (() => {
    // 컴포넌트가 마운트될때 호출
    console.log('컴포넌트 마운트')
    return () => {
      // 컴포넌트가 언마운트될때 호출
      console.log('컴포넌트가 언마운트')
    }
  }, [])
  
  useEffect(() => {
    console.log('user 값이 설정됨')
    return (
      console.log('user값 바뀌기 전')
    )
  }, [user])
  return (
    <div>
      <b style={{
        cursor: 'pointer',
        color: user.active ? 'green' : 'black'
      }} onClick={()=>onToggle(user.id)}>
        id:{user.id} {user.username}
      </b> 
      <span>({user.email})</span>
      <button onClick={() => onRmove(user.id)}>삭제</button>
    </div>
  )
};


// 사용자 정보 관리 컴포넌트(props로 받아온 값 사용)
const UserList = ({ users, onRmove, onToggle}) => {

  return (
    // map을 사용하여 배열을 컴포넌트 배열로 변환(배열의 원소 개수와 상관없이 출력)
    <div>
      {users.map(user => (
        <User 
        user={user} 
        key={user.id} 
        onRmove={onRmove} 
        onToggle={onToggle} />
      ))}
    </div>
  )
};


export default UserList;