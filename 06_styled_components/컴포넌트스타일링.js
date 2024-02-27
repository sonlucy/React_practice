/*
 스타일링 컴포넌트
  1. CSS
    - 컴포넌트를 스타일링하는 가장 기본적인 방식
    - CSS를 불러와서 사용하는 방식으로 작성시 CSS 클래스가 중복이 될 수 있다.
    - 중복을 방지하는 방법
      * 이름을 지을 때 특별한 규칙을 사용한다.
       . 컴포넌트 이름-클래스 이름
       . BEM(Block Element Modifier) 방식=> 사용 목적에 따라 이름을 정의하는 방식
      * CSS Selector를 활용하여 스타일링한다.
       . CSS 클래스가 특정 클래스 내부에 있는 경우에만 스타일을 적용

  2. SASS(Syntactically Awesome Style Sheets: 문법적으로 짱 멋진 스타일시트)
    - CSS 전처리기로 복잡한 작업을 쉽게 할 수 있도록 해주고, 코드의 재활용성을 높여준다.
    - 코드에 대한 가독성을 높여 유지보수를 쉽게 해준다.
    - 확장자가 .scss/.sass 인 파일을 만들어 사용한다.
    - https://sass-guidelin.es/ko/
    - SASS
        $font-stack:    Helvetica, sans-serif
        $primary-color: #333

        body
          font: 100% $font-stack
          color: $primary-color

    - SCSS
        $font-stack:    Helvetica, sans-serif;
        $primary-color: #333;

        body {
          font: 100% $font-stack;
          color: $primary-color;
        }
    - 설치하기: npm install node-sass


  3. CSS Module
    - 리액트 프로젝트에서 컴포넌트 스타일링을 할때 사용하는 방법 중 하나
    - CSS를 불러와서 사용할 때 클래스 이름이 중첩되는 것을 방지해준다.
    - 파일이름.module.css로 설정하고, import할 때 .module.css를 붙여주면 된다.


  4. styled-components

 */