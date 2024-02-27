import React from "react";
import styles from "./Box.module.css"; // css 모듈파일 불러오기

const Box=() => {
  // return <div className={styles.Box}>{styles.Box}</div>;
  return (
  <>
  {/* className={style변수.적용할CSS명} => 컴포넌트명_CSS_개별ID */}
    <div className={styles.Box}>
      <p>{styles.Box}</p>
      <p>안녕하세요. 저는 <span className="something">CSS Module</span>입니다.</p>
    </div>
    <div className={`${styles.Box} ${styles.inverted}`}>
      <p>{styles.Box}</p>
      <p>안녕하세요. 저는 <span className="something">CSS Module</span>입니다.</p>
    </div>
  </>

  )
};

export default Box;