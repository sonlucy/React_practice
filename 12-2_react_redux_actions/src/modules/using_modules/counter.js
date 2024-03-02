// 초기상태 및 리듀셔 함수 정의
// 모듈: Ducks 패턴을 사용해 액션 타입, 액션 생성 함수, 리듀서를 작성한 코드

// 액션 타입 정의(액션 타입은 대문자로 정의하고, 문자열 내용은 '모듈 이름/액션 이름' 형태로 작성)
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수 정의(액션 생성 함수는 export로 내보내기)
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 초기 상태 정의 (리듀서의 초기 상태는 객체 형태로 작성)
const initialState = {
  number: 0
};

// 리듀서 작성(리듀서는 export default로 내보내기)
const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1
      };
    case DECREASE:
      return {
        number: state.number - 1
      };
    default:
      return state;
  }
};

export default counter;