import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Code = () => {
  const kakao_code = new URL(window.location.href).searchParams.get('code');
  console.log("code", kakao_code);

  return (
    <div>
      <h1>로그인 중입니다.</h1>
    </div>
  )
}

export default Code;