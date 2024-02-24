import './App.css';
import React, {Component} from 'react';
import ItemSample from './comp/ItemSample';
import ItemApp from './comp/ItemApp';
import LifeCycle from './comp/LifeCycle';
import ErrorBoundary from './comp/ErrorBoundary';

// 랜덤 색상 생성 함수
const getRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }

  // 랜덤 색상 설정 함수
  RandomColor = () => {
    this.setState({
      color: getRandomColor()
    })
  }

  render() {
    return (
      <>
        <button onClick={this.RandomColor}>랜덤 색상</button>
        {/* props로 하위 컴포넌트에 색상 전달 */}
        <ErrorBoundary>
          <LifeCycle color={this.state.color}/>  {/* props로 하위 컴포넌트에 색상 전달 */}
        </ErrorBoundary>
      </>
    );
  };
}

export default App;
