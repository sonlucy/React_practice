import styled from "styled-components";
import palette from "../../lib/styles/palette";
import css from "styled-components";

// 버튼 생성 컴포넌트
const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 4px 16px;  
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }

  /* 버튼의 크기 */
  ${(props) => 
  props.fullWidth &&
  css`
    padding-top: 12px;
    padding-bottom: 12px;
    width: 100%;
    font-size: 1.125rem;
  `
  }

  /* 다른 스타일링이 필요한 경우 추가 */
  ${(props) => props.cyan &&
  css`
    background: ${palette.cyan[5]};
    &:hover {
      background: ${palette.cyan[4]};
    }
  `
  }
`;

// 버튼 컴포넌트
const Button = (props) => <StyledButton {...props}/>;

export default Button;