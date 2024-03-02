import React from "react";
import { connect } from "react-redux"; // 리덕스 스토어에 연결하기 위한 connect 함수 불러오기
import { changeInput, insert, toggle, remove } from "../../modules/todos"; // 액션 생성 함수 불러오기
import Todos from "../../components/Todos";  // 컴포넌트 불러오기

// Todos 컴포넌트에게 전달해 줄 props 상태와 액션 생성 함수들을 정의
const TodosContainer = ({ input, todos, changeInput, insert, toggle, remove }) => {
  return (
    // Todos 컴포넌트에게 전달해 줄 props 상태와 액션 생성 함수들을 정의
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

export default connect(
  // mapStateToProps: 리덕스 스토어의 상태를 조회하여 어떤 것을 props로 넣어줄지 정의
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos
  }),
  // mapDispatchToProps: 액션 생성 함수를 컴포넌트의 props로 넣어주기 위한 함수
  {
    changeInput,
    insert,
    toggle,
    remove
  }
)(TodosContainer);