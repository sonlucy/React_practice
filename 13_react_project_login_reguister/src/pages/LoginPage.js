import React from "react";
import AuthForm from "../components/auth/AuthForm";
import AuthTemplate from "../components/auth/AuthTemplate";
import LoginForm from "../containers/auth/LoginForm";

const LoginPage = () => {
  return (
    <AuthTemplate>
{/*       <AuthForm type={'login'}/> */}
      <LoginForm type={'login'} />
    </AuthTemplate>
  )
}
export default LoginPage;

