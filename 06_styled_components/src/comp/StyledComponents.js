// styled-components 라이브러리를 사용하여 컴포넌트를 스타일링하는 방법
// Tagged 템플릿 리터럴을 사용하여 스타일을 적용한다.
//   - 템플릿 안에 자바스크립트 객체나 함수를 전달할 때 온전히 추출할 수 있다.
// 설치하기: npm install styled-components / yarn add styled-components
// VSCode Extension -> vscode-styled-components

import React from "react";
import styled, {css} from "styled-components";

const Box = styled.div`
  // props로 전달된 값을 직접 전달해줄 수 있다.
  background: ${props => props.color || 'blue'};
  padding: 1rem;
  display: flex;

  width: 1024px;
  margin: 0 auto;
  /* 미디어쿼리를 이용해 반응형 디자인 적용 */
  @media (max-width: 1024) {
    width: 768px;
  }
  @media (max-width: 768) {
    width: 100%;
  }
`;

const Button = styled.button `
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  /* &문자를 사용하여 Sass 처럼 자기 자신 선택 가능 */
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  /*다음 코드는 inverted 값이 true일 때 특정 스타일을 부여해 줍니다.*/
  ${(props) => props.inverted && css`
      background: none;
      border: 2px solid white;
      color: white;

      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

// 컴포넌트 제작
const StyledComponents = () => {
  return (
    <Box color="black">
      <Button>안녕하세요</Button>
      <Button inverted={true}>테두리만</Button>
    </Box>
  )
}

export default StyledComponents;
