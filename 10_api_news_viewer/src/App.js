// axios로 API 호출해서 데이터 받아오기
// axios: API 호출을 위한 라이브러리, 자바스크립트 HTTP 클라이언트(가장 많이 사용됨)
// axios 특징: 요청을 Promise 기반으로 처리, 브라우저와 Node.js에서 모두 사용 가능
// axios 설치: npm install axios
// https://jsonplaceholder.typicode.com 에서 더미 데이터 받아오기

import './App.css';
// import React, {useCallback, useState} from 'react';
// import axios from 'axios';
/* import NewsList from './components/NewsList';
import Categories from './components/Categories'; */
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import NewsPage from './pages/NewsPage';

function App() {
  // const [data, setData] = useState(null);

/*   const onClick = async () => {
    try {
      const response = await axios.get(
        // 'https://jsonplaceholder.typicode.com/todos'
        'https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=aa45e6fdfa0642a28c655e3c1d996977'
      )
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  } */

  // category 상태를 useState로 관리
  // const [category, setCategory] = useState('all');

/*  // onSelect 함수를 만들어서 category 상태를 변경 
    const onSelect = useCallback(category => {
    setCategory(category);
  }, []); */

  return (
    <div>
{/*       <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}/>}
     */}
  
{/*       <Categories category={category} onSelect={onSelect}/>
      <NewsList category={category}/> */}

      <Routes>
        <Route path='/' element={<NewsPage/>}/>
        <Route path='/:category' element={<NewsPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
