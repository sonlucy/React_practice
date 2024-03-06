import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Kakao = () => {
  const navigate = useNavigate();
  const kakao_code = new URL(window.location.href).searchParams.get('code');
  console.log(kakao_code);

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }

  useEffect(() => {
    // 카카오 로그인 요청 => 서버로 code를 보내서 acess token을 받아옵니다.
    fatch('http:/localhost:4000/oauth/kakao', {
      method: 'POST',
      headers: headers,

    })
    .then(res => res.json())
    .tehn(data => {
      console.log(data);
      localStorage.setItem(data.user_id);
    })
    .catch(err => {
      console.error(err);
    });
  }, []);

  return (
    <div>
      <h1>로그인 중입니다.</h1>
    </div>
  )

}
