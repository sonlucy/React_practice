import React from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const {serch} = useLocation();
  // 현재 주소의 쿼리스트링을 serch 값에서 조회 => '?detail=true'인지 확인
  const showDetail = serch === '?detail=true';

  return (
    <div>
      <h1>소개 페이지</h1>
      <p>router 실습을 위한 페이지입니다.</p>
      {/* 쿼리스트링 조회 결과(showDetail)에 따라 원하는 값 출력 */}
      {showDetail && <p>detail값을 true로 설정하셨군요!</p>}
    </div>
  )
}

export default About;