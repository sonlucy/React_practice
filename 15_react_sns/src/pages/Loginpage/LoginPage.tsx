import styles from "./LoginPage.module.css";

function LoginPage() {
    const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
    const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
    const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const GOOGLE_REDIRECT_URI = process.env.REACT_APP_GOOGLE_REDIRECT_URI;

    const onKakaoSocialLogin = () => {
        window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}`;
    }
    const onGoogleSocialLogin = () => {
        window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=openid email profile`;
    }


    return <div className={styles.container}>
        <div className={styles.button__wrapper}>
            <button
                className={styles.button__kakao__login} onClick={onKakaoSocialLogin}>
                {/* <img
                    className={styles.button__image}
                    src={`${process.env.PUBLIC_URL}/asset/kakao_login_large_narrow.png`} /> */}
                카카오 로그인
            </button>
        </div>
        <div className={styles.button__wrapper}>
            <button
                className={styles.button__google__login} onClick={onGoogleSocialLogin}>
                {/* <img
                    className={styles.button__image}
                    src={`${process.env.PUBLIC_URL}/asset/web_light_sq_ctn@2x.png`} /> */}
                구글 로그인
            </button>
        </div>
    </div>
}

export default LoginPage;
