// SASS 파일을 사용해 스타일링하기
// npm install node-sass 설치후 사용
import React from "react";
import classNames from "classnames";  // classNames 이름을 생성해주는 라이브러리
import './Button.scss'  // scss 컴포넌트 파일 불러오기

// 클래스 이름: 컴포넌트명 속성명
const Button = ({children, size, color}) => {
  // return <button className={["Button",size].join(' ')}>{children}</button>;
  // ["Button", size].join(' '): className의 CSS 클래스 이름을 동적으로 설정
  
  // return <button className={[`Button ${size}`]}>{children}</button>;
  
  return <button className={classNames('Button', size, color)}>{children}</button>;
};

// defaultProps를 사용하여 size/color의 기본값을 설정
Button.defaultProps = {
  size: 'medium',
  color: 'blue'
};

export default Button;