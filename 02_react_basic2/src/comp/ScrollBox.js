import React, { Component } from "react";

class ScrollBox extends Component {
  box = React.createRef(); // createRef()로 ref 생성
  // scrollToBottom() 메서드 생성
  scrollToBottom = () => {
/*    
    const scrollHeight = this.box.scrollHeight; // 스크롤이 있는 박스에 안에 있는 <div>의 높이(안쪽 div)
    const clientHeight = this.box.cliengHeight;  // 스크롤이 있는 박스의 높이(바깥쪽 div) */
    const {scrollHeight, clientHeight} = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  }
  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative"
    };

    const innerStyle = {
      height: "650px",
      width: "100%",
      background: "linear-gradient(white, black)"
    };

    return (
      // <div style={style} ref={(ref) => {this.box = ref;}}>
      // 리액트 내장함수를 이용한 ref 정의(createRef())
      <div style={style} ref= {this.box}>
        <div style={innerStyle} />
      
      </div>
    )
  }
}

export default ScrollBox;