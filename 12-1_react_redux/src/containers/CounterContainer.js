// 컨테이너 컴포넌트 만들기
// (리덕스 스토어 연동) 리덕스 스토어에 접근하여 원하는 상태를 받아 오거나, 액션을 디스패치한다.

import React from 'react';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter'; // 액션 생성 함수 불러오기
import { connect } from 'react-redux'; // 리덕스 스토어에 연결하기 위한 connect 함수 불러오기

const CounterContainer = ({number, increase, decrease}) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
  )
};

export default connect(
  state => ({
    number: state.counter.number
  }),
  {
    increase,
    decrease
  }
)(CounterContainer);

// // mapStateToProps: 리덕스 스토어의 상태를 조회하여 어떤 것을 props로 넣어줄지 정의
// const mapStateToProps = state => ({
//   number: state.counter.number
// });

// // mapDispatchToProps: 액션 생성 함수를 컴포넌트의 props로 넣어주기 위한 함수
// const mapDispatchToProps = dispatch => ({
//   increase: () => {
//     console.log('increase');
//     dispatch(increase());
//   },
//   decrease: () => {
//     console.log('decrease');
//     dispatch(decrease());
//   }
// });

// export default connect(
//   mapStateToProps,    // state를 파라미터로 받아오는 함수(현재 스토어가 지니고 있는 상태를 조회)
//   mapDispatchToProps  // dispatch를 파라미터로 받아오는 함수(액션을 디스패치하는 함수)
// )(CounterContainer);  // 컴포넌트를 리덕스와 연동할 때에는 connect 함수 사용