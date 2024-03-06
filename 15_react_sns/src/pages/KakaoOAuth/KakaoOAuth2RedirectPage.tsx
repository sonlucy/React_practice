import styles from "./KakaoOAuth2RedirectPage.module.css";
import { useEffect } from "react";

function KakaoOAuth2RedirectPage() {
  // 1. 인가코드
  const code = new URL(window.location.href).searchParams.get("code");
  // 2. access Token 요청
  const getToken = async (code: string) => {
    const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
    const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;

    const response = await fetch(`https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&code=${code}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    });
    return response.json();
  }

  useEffect(() => {
    if (code) {
      getToken(code).then((res) => {
        console.log(res.access_token);
      })
    }
  }, [code]);

  return <div className={styles.container} >
    <div className={styles.spinner} />
  </div>

}

export default KakaoOAuth2RedirectPage;
