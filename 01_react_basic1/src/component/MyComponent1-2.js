// prop를 이용한 컴포넌트
const MyComponent1 = (props) => {
  const text = [<p key="1">Node.js</p>, <p key="2">React</p>]
  const {ver} = props;
  return (
  // <div>{text}</div>

  // App에서 전달받은 props를 이용해 출력
  <div>안녕하세요. 현재 과목은 {props.name} {ver}입니다.</div>
  )
};

const MyComponent2 = (props) => {
  return (
  <div>
    <h1>My Component2</h1>
    <p>두번째 컴포넌트 입니다.</p>
    <p>children값은 {props.children}입니다.</p>
  </div>
  )
};

// 여러개의 컴포넌트를 내보낼 때
export {MyComponent1, MyComponent2};