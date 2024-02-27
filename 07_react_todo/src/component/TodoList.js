import React, { useState } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = ({todo, onUpdate, onDelete}) => {
  const [search, setSearch] = useState(""); //  검색어 상태값 관리

  const onChange = (e) => {
    setSearch(e.target.value);
  }

  // 검색어가 포함된 todo만 필터링하여 랜더링하기 위한 함수
  const filteredTodo = () => {
    return (
      search === "" 
      ? todo 
      : todo.filter((item) => item.content.toLowerCase().includes(search.toLowerCase()))
      // 검색어가 포함된 todo만 필터링하여 결과 반환(search를 모두 소문자화)
      )
  }

  return (
    <div className="TodoList">
      <h3>Todo List</h3>
      <input className="schBar" placeholder="검색어를 입력하세요." 
      value={search} // 검색어 상태값
      onChange={onChange}></input>
      <div className="list_wrapper">
        {/* 배열.map() todo의 값을 순차적으로 순회하여 Html로 렌더링 */}
        {/* filterdTodo()함수의 결과를 가져와 출력 */}
        {filteredTodo().map((item) => (
          // <div>{item.content}</div>
          <TodoItem key={item.id} {...item} /* TodoItem 컴포넌트에 item의 값  */
          onUpdate={onUpdate}  //
          onDelete={onDelete}/>  //
        ))}
      </div>
    </div>
  )
}

export default TodoList;