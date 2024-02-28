import './App.css';
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'
import Profile from './components/Profile';
import Profiles from './components/Profiles';
import HistorySample from './components/HistorySample';

function App() {
  return (
    <div>
      <ul>
{/*         <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li> */}
        {/* Link 컴포넌트는 클릭하면 해당 주소로 이동 */}
        <li><Link to='/'>홈</Link></li>
        <li><Link to='/about'>소개</Link></li>
{/*         <li><Link to='/profile/velopert'>velopert 프로필</Link></li>
        <li><Link to='/profile/gildong'>gildong 프로필</Link></li> */}
        <li><Link to='/profile/'>프로필</Link></li> 
        <li><Link to='/history/'>history 예시</Link></li> 
      </ul>
      <hr/>

      {/* 여러개의 Route를 지정할 경우 Routes 컴퍼넌트로 묶어준다. => 기존 */}
      {/* Route 하나에 여러 개의 path 지정 => path props를 배열로 설정하여 각 주소들을 배열로 묶어줌 */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      {/* <Route path='/profile/:username' element={<Profile/>}/> */}
      <Route path='/profile/*' element={<Profiles/>}/>
      <Route path='/history' element={<HistorySample/>}/>
      <Route path='/*' element={<h1>존재하지 않는 페이지입니다.</h1>}/>
      
    </Routes>

    </div>
    
  );
}

export default App;
