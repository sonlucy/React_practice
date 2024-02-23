import { Component } from 'react';
import './App.css';
import Validation from './comp/Validation';
import ValidationRef from './comp/ValisationRef';
import ScrollBox from './comp/ScrollBox';
import InputRefFunction from './comp/inputRefFunction';

class App extends Component {
  render() {
    return (
      <div id="myApp">
        <Validation/>
        <hr></hr>
        <ValidationRef/>
        <hr></hr>
        {/* ScrollBox 컴퍼넌트에 "scrollBox"라는 이름 부여 */}
        <ScrollBox ref={(ref) => this.ScrollBox = ref}/>
        {/* scrollBox 이름을 가지고 있는 컴포넌트의 scrollToBottom() 메서드 호출 */}
        <button onClick={() => this.ScrollBox.scrollToBottom()}>맨 밑으로</button>
        <hr/>
        <InputRefFunction/>
      </div>
    );
  }
}

export default App;
