// 함수형 컴포넌트를 이용한 이벤트 처리
import Reat, {useState} from 'react';

const EventFunc1 = () => {
/*   const [form, setForm] = userState({
    name: '',
    message: ''
  });
  const {name, message} = form; */

  // state 정의
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  // 이벤트 처리 메소드
  // input의 값이 변경될때마다 호출되는 메서드
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);

  // 버튼을 클릭했을 때 호출되는 메소드
  const onClick = () => {
    alert(username + ': ' + message );
    setUsername('');
    setMessage('');
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
        onChange={onChangeUsername}/><br></br>
        <input type='text' name='message' placeholder='아무거나 입력하세요' value={message} 
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}/>
        <button onClick={onClick}>확인</button>
    </div>
  )
}

export default EventFunc1;