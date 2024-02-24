// useMemo : 함수형 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있게 해주는 Hook

import React, {useState, useMemo} from "react";

const getAverage = numbers => {
  console.log('평균값 계산 중...');
  if (numbers.length === 0)
    return 0;
  const sum = numbers.reduce((a, b) => a + b);
  // reduce() : 배열 내 모든 요소의 합을 구하는 메서드
  return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]); // 배열 상태 선언
    const [number, setNumber] = useState(''); // 숫자 입력값 상태 선언

    // input 변경 이벤트 핸들러 함수(숫자 입력값 변경시 호출)
    const onChange = e => {
        setNumber(e.target.value);
    };
    // 등록 버튼 클릭 이벤트 핸들러 함수(숫자 입력값을 배열에 추가)
    const onInsert = e => {
        const nextList = list.concat(parseInt(number)); // parseInt() : 문자열을 정수로 변환 => 새로운 배열 생성
        setList(nextList); // 새로 생성함 배열을 상태값으로 설정
        setNumber(''); // 숫자 입력값 초기화
    };
  
    return (
        <div>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값: </b> {getAverage(list)}
            </div>
        </div>
    );
};

export default Average;