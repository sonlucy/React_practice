// 서브 라우터 사용하기

import React from "react";
import {Route, Routes, Link, NavLink } from 'react-router-dom'
import Profile from "./Profile";

const Profiles = () => {
  return (
    <div>
      <h3>유저 목록</h3>
      <ul>
        {/* 파라미터를 이용한 라우터 연결 */}
        <li><Link to='/profile/velopert'>velopert</Link></li>
        {/* NavLink: 링크에 대한 css를 style과 slassName을 사용하여 적용하는 방식 */}
        <li><NavLink style={(isActive) => ({backgroundColor: isActive? 'black' : 'white'})}
          to='/profile/gildong'>gildong</NavLink></li>
      </ul>

      <Routes>
        <Route path='/*' element={<div>유저를 선택해주세요.</div>}/>
        <Route path=':username' element={<Profile/>}/>
      </Routes>
    </div>
  )
}

export default Profiles;