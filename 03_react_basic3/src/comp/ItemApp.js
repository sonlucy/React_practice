// 

import React, {useState} from "react";

const ItemApp = () => {
  // useState() 함수로 상태를 정의(초깃값: 3개의 항목을 가진 배열)
  const [names, setNames] = useState([
    {id:1, text:'홍길동'},
    {id:1, text:'김철수'},
    {id:1, text:'이영희'},
  ])
  // 새로운 항목을 추가하기 위한 상태값 정의(새로운 id, 새로운 text)
  const [nextID, setNextId] = useState(4); // 가장 마지막 항목의 id+1으로 초기화
  const [inputText, setInputText] = useState(''); // input 요소의 상태값

  // *** 추가 이벤트 처리 함수 정의 (교재 p80~ 101)***
  // input 요소의 변경 이벤트 처리 함수
  const TextChange = e => setInputText(e.target.value); 
  // 추가 버튼 클릭 이벤트 처리 함수
  const CreateItem = () => {
    const nextNames = names.concat({id:nextID, text: inputText});
    // concat(): 기존 배열에 입력받은 객체를 추가하여 새로운 배열을 반환
    setNames(nextNames); // 배열 업데이트
    setNextId(nextID +1); // nextID 업데이트
    setInputText('');  // input 요소의 상태값을 초기화
  }

  // *** 데이터 제거 이벤트 처리 함수 정의 ***
  const RemoveItem = (id) => {
    const nextNames = names.filter(name => name.id !==id );
    // filter(): 조건에 맞는 요소만 추출하여 새로운 배열을 반환
    setNames(nextNames); // 배열 업데이트

  }

  // 렌더링 항목 배열을 생성
  const nameList = names.map(name => (
    <li key={name.id} onDoubleClick={()=>RemoveItem(name.id)}>{name.text}</li>
  ));
  // 렌더링
  return (
    <>
    <input value={inputText} onChange={TextChange}/>
    <button onClick={CreateItem}>추가하기</button>
    <ul>{nameList}</ul>
    </>
  )
  

}

export default ItemApp;