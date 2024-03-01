import React, {Component} from "react";
import ColorContext from "../context/color";

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class SelectColor extends Component {
  static contextType = ColorContext;  // 2. contextType을 통해 context를 사용할 수 있다.

  // 3. context의 action 객체에서 setColor를 호출하여 색상 변경
  handleSetColor = color => {
    this.context.actions.setColor(color);
  }
  // 3. context의 action 객체에서 setSubColor를 호출하여 색상 변경
  handleSetSubColor = subcolor => {
    this.context.actions.setSubColor(subcolor);
  }

  render() {
    return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <div style={{display: 'flex'}}>
        {colors.map(color => (
          <div key={color} 
          style={{background: color, width: '24px', height:'24px', cursor: 'pointer'}} 
          // 4. onClick 이벤트로 
          onClick={() => this.handleSetColor(color)} 
          // 5.
          onDoubleClick={() => this.handleSetSubColor(color)} // 더블 클릭 이벤트 처리
          onContextMenu={e => {
            e.preventDefault();
            this.handleSetSubColor(color);
          }}></div>
        ))}
      </div>
      <hr/>
    </div>
    )
  }
};

export default SelectColor;
