import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Counter from './comp/Counter';
import Info from './comp/info';
import InfoReducer from './comp/InfoReducer';
import Average from './comp/Average';

function App() {
  const [visible, setVisible] = useState(false); //컴포넌트의 상태값을 설정하는 함수

  const onVisible = () => {
    setVisible(!visible); //상태값 변경(true일떈 false, false일땐 true로 반전)
  }
  return (
    <>
{/*     
    <button onClick={onVisible}>{visible?'숨기기':'보이기'}</button>
    {visible && <Info/>}
     */}
    {/* <InfoReducer/> */}
    <Average/>
    
    </>
  );
}

export default App;
