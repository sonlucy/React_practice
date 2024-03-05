import React, { useEffect } from "react";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { changeField, initialForm } from "../../modules/auth";
// import { changeField, initializeForm } from "../../modules/auth";
import AuthForm from "../../components/auth/AuthForm";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const {form} = useSelector(({auth}) => ({
    form: auth.login
  }))

  // input에 대한 이벤트 핸들러
  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value
      })
    )
  }

  // 폼 등록에 대한 이벤트 핸들러
  const onSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    console.log('로그인 정보 전송', form);

  }

  // 컴포넌트가 처음 렌더링될 떄 form을 초기화함
  useEffect(() => {
    dispatch(initialForm('register'))
  }, [dispatch])

  return (
    <AuthForm type='register'
      form={form}
      onChange={onChange}
      onSubmit={onSubmit} />
  )
}

export default RegisterForm;