import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";


// 회원가입, 로그인 폼의 공통 스타일

const AuthFormBlock = styled.div`
  /* 소제목 */
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  
  }
`;

// id, password 입력을 위한 스타일링된 input
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

// 폼 하단에 로그인 혹은 회원가입 링크를 보여줌
const Footer = styled.div`
  margin-top: 2rem;  /* 윗쪽 여백 2rem */
  text-align: right;  /* 오른쪽 정렬 */

  a {
    color: ${palette.gray[6]};
    text-decoration: underline;  /* 밑줄 */
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

// 상황에 따라 로그인 혹은 회원가입을 보여줌
const textMap = {
  login: '로그인',
  register: '회원가입'
};

// 에러를 보여줍니다
// const errorMessage = styled.div`
//   color: red;
//   text-align: center;
//   font-size: 13px;
//   margin-top: 1rem;
// `;



const AuthForm = ({type, form, onChange, onSubmit}) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput autoComplete="username" name="username" placeholder="아이디"
        onChange={onChange} value={form.username} />
        <StyledInput autoComplete="new_password" name="password" placeholder="비밀번호" 
        type="password" onChange={onChange} value={form.password} />

        {/* 회원가입 화면에서 패스워드 확인 입력란 화면에 표시(register 일때만) */}
        {type === 'register' && (
          <StyledInput autoComplete="new_password" name="passwordConfirm" placeholder="비밀번호 확인" 
          type="password" onChange={onChange} value={form.passwordConfirm} />
        )}
        <ButtonWithMarginTop cyan={true} fullWidth={true} style={{marginTop: '1rem'}} >
          {text}
        </ButtonWithMarginTop>  {/* cyan={true} fullWidth={true} */}
      </form>

      <Footer>
        {type === 'login'? 
        <Link to='/register'>회원가입</Link> :
        <Link to='/login'>로그인</Link>}
{/*         <Link to='/register'>회원가입</Link> */}
      </Footer>
    </AuthFormBlock>
  )
}

export default AuthForm;