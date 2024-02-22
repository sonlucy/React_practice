import { Component } from "react";
import PropTypes from "prop-types";

// 클래스형 컴포넌트에서 props 사용하기
class MyComponent3 extends Component {
  // defaultProps: props 기본값 설정
  static defaultProps = {
    name: '기본 이름'
  };
  // props 데이터 타입, 필수 여부 등 설정
  static propTypes = { // props 검증(타입, 필수 여부 등)
    name: PropTypes.string, // name props 타입을 문자열로 설정
    /* favoriteNumber: PropTypes.number.isRequired */ // 필수로 전달해야하는 props
  };
  // 클래스형 컴포넌트에서 랜더링 시에는 render()함수를 사용
  render() {
    console.log(this.props)
    const {name, age, children} = this.props; // 비구조화 할당
    return (
      // jsx문법으로 작성
      // 여러개 작성할 때는 부모객체가 있어야 함(최상위 태그는 무조건 하나가 있어야함.)
      // 왜냐하면 jsx의 구조는 트리구조를 갖고 있어서, 각 트리에 따라 움직여짐
      // 즉, App가 가지고있는 구조적인 부분도 있겠지만, 태그도 마찬가지
      <div>
        <h1>My Component3</h1>
        <p>안녕하세요. 제 이름은 {name}입니다.</p>
        <p>나이는 {age}입니다.</p>
        <p>children값은 {children}입니다.</p>
      </div>
    )
  }
}

/* const MyComponent2 = (props) => {
  return (
    <div>
      <h1>My Component2</h1>
      <p>두번째 컴포넌트입니다.</p>
      <p>chidren값은 {props.children}</p>

    </div>
  )
} */

// 단일 컴포넌트를 내보낼 때
export default MyComponent3;

// 데이터 검증 타입
