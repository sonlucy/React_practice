// 라이프 사이클 메서드를 사용한 예제

import React, {Component} from "react";

class LifeCycle extends Component {
  state = {
    number: 0,
    color: null
  }

  myRef = null; // ref를 설정할 부분

  // constructor: 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드
  // 부모 컴포넌트에 색상(props)을 전달하고 super(props)를 호출하여 초기화
  constructor(props) {
    super(props);
    console.group('constructor');
  }

  // getDerivedStateFromProps: props에 있는 값을 state에 넣을 때 사용하는 메서드
  // 부모에게 받은 color 값을 state에 동기화
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color};
    }
    return null;
  }

  // componentDidMount: 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메서드
  componentDidMount() {
    console.log('componentDidMount');
  }

  // shouldComponentUpdate: 컴포넌트를 리렌더링할지 말지 정하는 메서드
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    // 숫자의 마지막 자리가 4면 렌더링하지 않는다. (4, 14, 24, ...)
    return nextState.number % 10 !==4;
  }

  // componentWillUnmount: 컴포넌트가 웹 브라우저 상에서 사라지기 전에 호출하는 메서드
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  // handleClick: 버튼을 클릭할 때 호출(숫자 증가)
  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  // getSnapshotBeforeUpdate: DOM에 변화가 일어나기 직전의 색상 속성을 snapshot 값으로 반환
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color!=this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  // componentDidUpdate: 컴포넌트의 업데이트 작업이 끝난 후 호출하는 메서드
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot){
      console.log('업데이트 되기 직전 색상: ', snapshot);
    }
  }

  render() {
    console.log('render');
    const style = {
      color: this.props.color,
    };

    return (
      <>
        {this.props.missing.value}
        <h1 style={style} ref={ref => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color:{this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </>
    )
  }
};

export default LifeCycle;