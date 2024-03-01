import ColorContext from "../context/color";
import React,{useContext, useState} from "react";

const ColorBox = () => {
  const {state} = useContext(ColorContext)
  return (
    // 1. Context.Consumer 컴포넌트를 사용하여 context의 value를 사용할 수 있다.
    // <ColorConsumer>
    // {(value) => (

      <div>
        <div style={{
          width: '100px',
          height:'100px',
          // background: value.state.color
          background: state.color
        }}></div>

        <div style={{
          width: '168px',
          height:'68px',
          // background: value.state.subcolor
          background: state.subcolor
        }}></div>
      </div>
    
    // </ColorConsumer>
  )
}

export default ColorBox;