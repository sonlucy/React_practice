// useMemo: 함수형 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있게 해주는 Hooki
// 렌더링하는 과정에서 특정값이 바뀌었을 때만 연산을 실행하고, 원하는 값이 바뀌지 않았다면 
//   이전에 연산했던 결과를 다시 사용하는 방식 
// useCallback: 만들어 둔 함수를 재사용


import React, {useState, useMemo, useCallback, useRef} from "react";

const getAverage = numbers =>{
    console.log('평균값 계산 중...');
    if (numbers.length === 0)
        return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum/numbers.length;
};

// 컴퍼넌트 생성
const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
  const inputEl = useRef(null); // useRef()를 사용하여 ref 설정

    const onChange = useCallback(e => {
        setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 랜더링 될 때만 함수 생성

    const onInsert = useCallback(e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus(); // useRef()를 사용하여 ref 설정
  }, [number, list]); // number 또는 list가 바뀌었을 때만 함수 생성

  // useMemo()를 이용한 평균값 계산 최적화
  // list 배열에 변화가 생기면 getAverage 함수를 호출하여 평균값을 계산
    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값: </b> {avg}
            </div>
        </div>
    );
};

export default Average;