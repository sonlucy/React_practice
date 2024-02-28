// axios로 API 호출해서 데이터 받아오기
// axios: API 호출을 위한 라이브러리, 자바스크립트 HTTP 클라이언트(가장 많이 사용됨)
// axios 특징: 요청을 Promise 기반으로 처리, 브라우저와 Node.js에서 모두 사용 가능
// axios 설치: npm install axios
// https://jsonplaceholder.typicode.com/ 에서 더미 데이터 받아오기


import './App.css';
import React, { useCallback, useState } from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

function App() {

  //  category 상태를 useState로 관리
  const [category, setCategory] = useState('all');

  // onSelect 함수를 만들어서 category 상태를 변경
  const onSelect = useCallback(category => {
    setCategory(category);
    }, []);

  return (
    <div>
      <Categories category={category} onSelect={onSelect}/>
      <NewsList category={category}/>
    </div>
  );
}

export default App;
