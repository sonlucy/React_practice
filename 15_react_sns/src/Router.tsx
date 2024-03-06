import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/Loginpage/LoginPage";
import KakaoOAuth2RedirectPage from "./pages/KakaoOAuth2RedirectPage/KakaoOAuth2RedirectPage";
import GoogleOAuth2RedirectPage from "./pages/GoogleOAuth2RedirectPage/GoogleOAuth2RedirectPage";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
    {
        path: `${process.env.PUBLIC_URL}/`,
        element: <App />,
        children: [
            {
                path: "",
                element: <PrivateRouter component={<MainPage />} />
            },
            {
                path: "login",
                element: <LoginPage />
            },
            {
                path: "kakao/oauth",
                element: <KakaoOAuth2RedirectPage />
            },
            {
                path: "google/oauth",
                element: <GoogleOAuth2RedirectPage />
            }
        ]
    }
])

export default router;
