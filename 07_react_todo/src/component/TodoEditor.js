import React, {useState} from "react";
import "./TodoEditor.css";

const TodoEditor = ({onCreate}) => {

  // 할 일 입력시 상태값 변경
  const [content, setContent] = useState('');
  const onChange = (e) => {
    setContent(e.target.value);
  }

  const inputRef = React.useRef(); // input 요소에 ref 설정

  const onAdd = () => {
    if (content === "") {  // 할 일이 입력되지 x
      inputRef.current.focus();  // input 요소에 focus 이동
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onKeyDown = (e) => {
    // if (e.key === 'Enter')
    if (e.keyCode === 13) {
      onAdd();
    }
  }

  return (
    <div className="TodoEditor">
      <h3>새로운 일정 작성하기</h3>
      <div className="editor_wrapper">
        <input type="text" value={content} placeholder="할 일을 입력하세요"
        ref={inputRef} onChange={onChange} onKeyDown={onKeyDown}/>
        <button onClick={onAdd}>추가</button>
      </div>
    </div>
  )
}


export default TodoEditor;