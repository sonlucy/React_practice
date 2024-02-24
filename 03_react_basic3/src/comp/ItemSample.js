// 데이텁 배열을 컴포넌트 배열로 변환

import React from "react";

const ItemSample = () => {
  // 원본 배열 선언
  const name = ['홍길동', '김철수', '이영희', '박명수'];

  // 배열의 map()함수로 컴포넌트 배열로 변환
  const nameList = name.map((name, index) => <li key={index}>{name}</li>); //name:배열요소, index:배열인덱스
  // key: 리액트에서 랜더링할 때 꼭 필요한
  // console.log(nameList); // (4) [li, li, li, li]
  return (
    <div>
      <h2>사용자이름</h2>
      <ul>
        {nameList}
      </ul>
    </div>
  )
}

export default ItemSample;