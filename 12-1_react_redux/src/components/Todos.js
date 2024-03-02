import React from "react";

// 일정을 표시하기 위한 개별 컴포넌트
const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input type="checkbox"
        onChange={() => onToggle(todo.id)} // 체크박스 클릭시 클릭한 대상 id 전달 
        checked={todo.done} // 체크박스의 체크 상태를 표시한다.
        readOnly={true} />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
}

// 
const Todos = ({
  input, // 인풋에 입력되는 텍스트
  todos, // 할 일 목록이 들어 있는 객체
  onChangeInput,
  onInsert,
  onToggle,
  onRemove
}) => {
  const onSubmit = e => {
    e.preventDefault();  // 새로고침을 방지한다.
    onInsert(input);  // 할 일 목록에 추가한다.
    onChangeInput('');  // 인풋을 비운다.
  };

  const onChange = e => onChangeInput(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );

};

export default Todos