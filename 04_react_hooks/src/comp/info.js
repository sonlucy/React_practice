// 여러개의 useState를 사용하기
// useState 함수는 하나당 하나의 상태값만 관리할 수 있음

// 라이프 사이클 메서드와 비슷한 기능을 하는 useEffect Hook
// - componentDidMount, componentDidUpdate, componentWillUnmount를 합친 형태로 보아도 무방

import React, {useEffect, useState} from "react";

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  // 컴포넌트가 렌더링 될 때마다 특정 작업 수행
  useEffect(() => {
    console.log('렌더링이 완료되었습니다.(모든작업)');
    console.log({name, nickname});
  })
  // 컴포넌트가 처음 렌더링될떄만 실행(1회만 실행)
  useEffect(() => {
    console.log('처음 렌더링이 완료되었습니다.(마운트)');
  }, []);
  // 특정 값(name)이 업데이트될 때만 실행
  useEffect(() => {
    console.log('특정 상황에서만 렌더링.(name 변경시)');
  }, [name]);
  // 컴포넌트가 언마운트 되기 전이나 업데이트 되기 직전에 작업 수행
  useEffect(() => {
    // 업데이트 되기 직전에 작업 수행
    console.log('특정 상황에서만 렌더링.(nickname 변경시)');
    console.log(nickname);
    return() => { //////// 언마운트 되기 전에 작업 수행(그전까진 수행x)
      console.log('cleanup');
      console.log(nickname);
    }
  }, [nickname]);

  // name 변경 이벤트 핸들러 함수
  const onChangeName = (e) => {
    setName(e.target.value)
  }
  // nickname 변경 이벤트 핸들러 함수
  const onChangeNickname = (e) => {
    setNickname(e.target.value)
  }

  return (
    <>
    <div>
      <input type='text' onChange={onChangeName} value={name} placeholder="이름"/><br/>
      <input type='text' onChange={onChangeNickname} value={nickname} placeholder="닉네임"/>
    </div>

    <div>
      <p>이름: {name}</p>
      <p>닉네임: {nickname}</p>

    </div>
    </>
  )
}

export default Info;