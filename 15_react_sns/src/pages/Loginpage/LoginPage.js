import styles from './LoginPage.module.css';


const LoginPage = () => {
  const Kakao_Rest_api_key = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const Kakao_Rest_api_secret = process.env.REACT_APP_KAKAO_REDIRECT_URI;

  const REACT_APP_GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const REACT_APP_GOOGLE_REDIRECT_URI = process.env.REACT_APP_GOOGLE_REDIRECT_URI;

  
  // 카카오 인증 요청 oauth 요청
  const onKakaoLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${Kakao_Rest_api_key}&redirect_uri=${Kakao_Rest_api_secret}&response_type=code`
  }

  //
  const onGoogleLogin = () => [
    window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=${REACT_APP_GOOGLE_REDIRECT_URI}&response_type=code&scope=openid email profile`
  ]

  return (
    <div className={styles.container} >
      <div className = {styles.button__wrapper} >
        <button button className = {styles.button__kakao__login}
          onClick={onKakaoLogin}>카카오 로그인</button>
      </div>
      <div className = {styles.button__wrapper} >
        <button button className = {styles.button__google__login}
          onClick={onGoogleLogin}>구글 로그인
{/*             <img className={styles.button__image} src={src={`${process.env.PUBLIC_URL}/images/`}} /> */}
          </button>
      </div>
    </div>
  )
};


export default LoginPage;