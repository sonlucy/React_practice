import React from "react";
import "./Header.css"

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘의 날짜</h3>
      <h1>{new Date().toDateString()}</h1>  {/* 현재 날짜를 문자로 변경해 출력 */}
    </div>
  )
};

export default Header;