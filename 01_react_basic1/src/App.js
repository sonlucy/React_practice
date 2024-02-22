import logo from './logo.svg';
import './App.css';
import {MyComponent1,MyComponent2 }from './component/MyComponent1-2';
import MyComponent3 from './component/MyComponent3';
import Counter from './component/Counter';
import Say from './component/Say';
import EventClass1 from './component/EventClass1';
import EventClass2 from './component/EventClass2';
import EventFunc1 from './component/EventFunc1';
import EventFunc2 from './component/EventFunc2';

const App = () => {
  const name = '리액트';
  return (
    <div>
      {/* 컴포넌트 호출시 props를 이용해 값 전달 가능 */}
      <MyComponent1 name="리액트" ver='20.01' />  {/* name, ver는 props */}
      <hr></hr>
      <MyComponent2>리액트 children</MyComponent2> {/* children은 props */}
      <hr></hr>
      <MyComponent3 name="리액트" ver='20.01' age={30}/>
      <hr></hr>
      {/* state를 통한 현재값 업데이트 하기 */}
      <Counter />
      <hr></hr>
      <Say/>
      <hr></hr>
      {/* 클래스 컴포넌트로 이벤트를 처리하는 구현하기 */}
      <EventClass1/>
      <hr></hr>
      <EventClass2/>
      <hr></hr>
      <EventFunc1/>
      <hr></hr>
      <EventFunc2/>
      
    </div>
  );
}

// 컴포넌트 => 교재 33p~ 참고
// props => 교재 42p~ 참고


export default App;