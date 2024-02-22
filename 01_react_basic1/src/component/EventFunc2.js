// 함수형 컴포넌트를 이용한 이벤트 처리
import Reat, {useState} from 'react';

const EventFunc2 = () => {

  // state 정의
  const [form, setForm] = useState({
    username: '',
    message: ''
  });

  const {username, message} = form;

  // 이벤트 처리 메소드
  // input의 값이 변경될때마다 호출되는 메서드
  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존 form 내용을 이 자리에 복사한 뒤
                // ...: spread 연산자, 객체의 내용을 모두 푸러서 기존 객체에 복사해
      [e.target.name]: e.target.value // 대상 DOM의 name 속성값으로 state의 키값을 설정후 값을 너어줌
    }
    setForm(nextForm); // 복사한 객체를 새로운 form으로 설정
  }

  // 버튼을 클릭했을 때 호출되는 메소드
  const onClick = () => {
    alert(username + ': ' + message );
    setForm({
      username: '',
      message: ''
    })
  };

  // input-message에서 Enter키를 눌렀을 때 호출되는 메서드
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onclick();
    }
  };

  return (
    <div>
      <h1>이벤트 실습(함수형)</h1>
        <input type='text' name='username' placeholder='아무거나 입력하세요' value={username} 
        onChange={onChange}/><br></br>
        <input type='text' name='message' placeholder='아무거나 입력하세요' value={message} 
        onChange={onChange}
        onKeyPress={onKeyPress}/>
        <button onClick={onClick}>확인</button>
    </div>
  )
}

export default EventFunc2;