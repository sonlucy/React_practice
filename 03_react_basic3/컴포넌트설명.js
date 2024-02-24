/**  컴포넌트 반복 **
  * 컴포넌트를 반복해서 렌더링할 때는 배열을 사용하여 컴포넌트를 렌더링하면 된다.
  * 자바스크립트의 배열: map() 함수
  * map(): 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환하는 함수
  * arr.map(callback(currentValue[, index[, array]]), [thisArg])
   - callback: 새로운 배열의 요소를 생성하는 함수
   - currentValue: 콜백 함수에서 처리할 현재 요소
   - index: 콜백 함수에서 현재 인덱스 값
   - array: 콜백 함수에서 호출한 배열(원본 배열)
   - thisArg: 콜백 함수 내부에서 사용할 this 레퍼런스
   - 반환값: callback의 결과를 모은 새로운 배열로 리턴

   예시)
    const numbers = [1, 2, 3, 4, 5];
    const processed = numbers.map(num => num * num);
    console.log(processed); // [1, 4, 9, 16, 25]

  * 배열의 map() 함수를 사용하여 컴포넌트 배열로 변환
    const names = ['홍길동', '김철수', '이영희', '박영수'];
    const nameList = names.map((name, index) => {
      <li key={index}>{name}</li>});
  return (
      // 컴포넌트 배열을 렌더링
    <div>
      <h2>사용자 이름</h2>
      <ul>
        {nameList}
      </ul>
    </div>
  );

  * key: 
   - 리액트에서 배열을 렌더링할 때 꼭 필요한 값
   - 어떤 원소에 변동이 있었는지 알아내기 위해 사용
   - key가 없다면 Virtual DOM을 비교하는 과정에서 리스트를 순차적으로 비교하면서 변화를 감지
     => 리스트의 맨앞, 중간에 엘리멘트 삽입시 저능 저하

  * key 값 설정: map() 함수의 두 번째 파라미터로 index 값을 사용
    - index: 배열의 인덱스 값으로 고윳값 => key로 사용 가능

 */

/*** 컴포넌트 라이프사이클 메서드 ***
  * 리액트에서는 콤퍼넌트에 대한 라이프사이클(수명 주기)이 존재 
  * 컴포넌트의 수명: 페이지에 렌더링 되기전인 준비과정, 페이지에서 사라지기 전의 마무리 과정
  * 컴포넌트의 수명 주기에 따라 호출되는 메서드 => 라이프사이클 메서드
  * 라이프사이클 메서드: 컴포넌트의 상태에 변화가 있을 때마다 실행되는 메서드
    - 컴포넌트를 처음 렌더링할 때, 업데이트할 때, 제거할 때 특정 코드를 실행
    - 불필요한 업데이트를 방지하거나 업데이트 직전의 작업을 처리할 수 있음

  * 라이프사이클 메서드 종류(총 9가지)
    - Will 접두사 - 어떤 작업을 작동하기 전에 실행되는 메서드
    - Did 접두사 - 어떤 작업을 작동한 후에 실행되는 메서드
    - 이 메서드들을 컴포넌트 클래스에서 덮어 써 선언함으로 사용할 수 있다.
    - 라이프사이클은 총 세 가지 마운트, 업데이트, 언마운트로 나눈다.
      1. 마운트 : 페이지에 컴포넌트가 나타남
      2. 업데이트 : 컴포넌트 정보를 업데이트(리렌더링)
      3. 언마운트 : 페이지에서 컴포넌트가 사라짐

    1. 마운트
      - DOM이 생성되고 웹 브라우저상에 나타나는 것
      - 컴포넌트 만들기 => constructor -> getDerivedStateFromProps -> render -> componentDidMount
      - constructor: 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드
      - getDerivedStateFromProps: props에 있는 값을 state에 넣을 때 사용하는 메서드
      - render: 컴포넌트를 렌더링하는 메서드
      - componentDidMount: 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메서드

    2. 업데이트(상황)
      - props가 바뀔 때
      - state가 바뀔 때
      - 부모 컴포넌트가 리렌더링될 때
      - this.forceUpdate로 강제로 렌더링을 트리거할 때

      - 컴포넌트 만들기
       -> getDerivedStateFromProps: props에 있는 값을 state에 넣을 때 사용하는 메서드(마운트 단계에서도 호출됨)
       -> shouldComponentUpdate: 컴포넌트가 리렌더링을 해야 할지 말아야 할지 결정하는 메서드
                                 (true: 리렌더링, false: 리렌더링 안함)
       -> render : 준비한 UI를 렌더링하는 메서드
       -> getSnapshotBeforeUpdate : 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출하는 메서드
       -> componentDidUpdate : 컴포넌트의 업데이트 작업이 끝난 후 호출하는 메서드

    3. 언마운트
      - 컴포넌트를 DOM에서 제거하는 것
      - componentWillUnmount: 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메서드

    라이프사이클 메서드 참조: https://tinyurl.com/2yvjoade
    
*/