
import './App.css';
import React, {useRef, useState} from 'react';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';

const TodoData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "Node.js 공부하기",
    createDate: new Date().getTime(),
  },
];
function App() {
  const [todo, setTodo] = useState(TodoData);
  const nextId = useRef(2); // id값을 3으로 초기화(추가되는 할일의 id값 초기화)

  // 할 일 추가 함수
  const OnCreate = (content) => {
    const newTodo = {
      id: nextId.current,
      isDone: false,
      content: content,
      createDate: new Date().getTime(),
    };
    // setTodo([...todo, newTodo]); // 기존 todo 배열 끝에 추가(맨 아래쪽에 출력)
    setTodo([newTodo, ...todo]); // 기존 todo 배열 맨 앞에에 추가(가장 위쪽에 출력)
    nextId.current +=1;
  }

  // todo 수정하기
  const onUpdate = (targetId) => {
    setTodo(
      todo.map((item) => {
        if (item.id === targetId) {
          return {
            ...item,
            isDone: !item.isDone, // isDone값을 반전
          }
        } else {
          return item;
        }
      })
    )
  }

  // todo 삭제하기
  const onDelete = (targetId) => {
    setTodo(
      todo.filter((item)=> item.id !== targetId)
    )
  }

  return (
    <div className="App">
      <Header/>
      <TodoEditor onCreate={OnCreate}/>
      <TodoList todo={todo} // props로 todo 배열을 전달
        onUpdate={onUpdate}   // props로 
        onDelete={onDelete}  //
      />
      <div>Footer</div>
    </div>
  );
}

export default App;
