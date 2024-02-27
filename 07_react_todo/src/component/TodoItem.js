import "./TodoItem.css";

const TodoItem = ({id, isDone, content, createDate, onUpdate, onDelete}) => {
  
  // 체크박스 변경 시 호출 함수
  const onChangeCB = () => {
    onUpdate(id);
  };

  // 삭제 버튼 클릭시 호출 함수
  const onClickDelete = () => {
    onDelete(id);
  }

  return (
    <div className="TodoItem">
      <div className="checkbox_col"> 
        <input type="checkbox" onChange={onChangeCB} checked={isDone} /> {/* 체크여부 isDone으로 설정 */}
      </div>
      <div className="title_col">{content}</div> {/* 할 일을 표시하기위해 랜더링 */}
      <div className="date_col">{new Date(createDate).toLocaleDateString()}</div> 
      <div className="btn_col"> 
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
};
export default TodoItem;