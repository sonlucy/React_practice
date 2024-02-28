/* 카테고리 기능 구현

  • business(비즈니스)
  • entertainment(연예)
  • health(건강)
  • science(과학)
  • sports(스포츠)
  • technology(기술)
*/

import React from 'react';
import styled, { css } from 'styled-components';
// import { NavLink } from 'react-router-dom';

const categories = [
  {
    name: 'all',
    text: '전체보기'
  },
  {
    name: 'business',
    text: '비즈니스'
  },
  {
    name: 'entertainment',
    text: '연예'
  },
  {
    name: 'health',
    text: '건강'
  },
  {
    name: 'science',
    text: '과학'
  },
  {
    name: 'sports',
    text: '스포즈'
  },
  {
    name: 'technology',
    text: '기술'
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto     
  }
`
const Category = styled.div`
  font-size: 15px;
  cursor: pointer;  // 마우스 커서를 올렸을 때 손가락 모양으로 변경
  white-space: pre; // 줄바꿈을 위한 CSS
  text-decoration: none; // 밑줄 제거(링크 스타일 제거)
  color: inherit; // 기본색상 상속
  padding-bottom: 0.25rem; // 하단 여백

  &:hover {  // 마우스를 올렸을 때 색상 변경
    color: #495057;
  }

  /* 선택한 카테고리에 따라 다른 스타일 적용 */
  ${props =>
    props.active && css`
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;

      &:hover {
        color: #3bc9db;
      }
    `

  }

  &+& {
    margin-left: 1rem;  // 맨 처음 카테고리를 제외한 나머지 카테고리들에 대해 왼쪽 여백 설정
  }
`

const Categories = ({ category, onSelect }) => {
  return (
    <CategoriesBlock>
      {/* 카테고리 리스트 출력 콤퍼넌트 */}
      {categories.map(c => (
        <Category 
          key={c.name} 
          active={category === c.name}
          onClick={()=> onSelect(c.name)}>
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;