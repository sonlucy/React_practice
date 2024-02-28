// 리액트 라우터 부가 기능
// useNavigate : Link 컴포넌트를 사용하지 않고 자바스크립트로 라우팅을 이동할 수 있게 해줌

import React from "react";
import { useNavigate } from "react-router-dom";

const HistorySample = () => {
  const navigate = useNavigate();  // useNavigate 훅을 사용해 history 객체에 접근

  // 뒤로 가기
  const onGoBack = () => {
    navigate(-1);  // 인덱스로 처리, -1은 뒤로가기(두번 뒤로가기는 -2)
  };

  // 홈으로 이동
  const onGoHome = () => {
    navigate('/') //주소로 이동
  }

  return (
    <div>
      <button onClick={onGoBack}>뒤로</button>
      <button onClick={onGoHome}>홈으로</button>
    </div>
  )
};

export default HistorySample;