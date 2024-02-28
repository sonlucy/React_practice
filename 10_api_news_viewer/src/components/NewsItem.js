/*
조회데이터: response.articles
- title: 제목
- description: 내용
- url: 링크
- urlToImage: 뉴스 메인 이미지
 */

import React from "react";
import styled from "styled-components";

const NewsItemBlock = styled.div`
    display: flex;
    .thumbnail {
        margin-right: 1rem;
        img {
            display: block;
            width: 160px;
            height: 100px;
            object-fit: cover;
        }
    }
    .contents {
        h2 {
            margin: 0;
            a {
                color: black;
            }
        }
        p {
            margin: 0;
            line-height: 1.5;
            margin-top: 0.5rem;
            white-space: normal;
        }
    }
    & + & {
        margin-top: 3rem;
    }
`;

// 부모 컴포넌트에서 받아온 article을 사용하여 뉴스 정보를 보여줌
const NewsItem = ({ article }) => {
  const {title, description, url, urlToImage} = article;  // 비구조화 할당
  return (
    <NewsItemBlock>
      {/* 뉴스 이미지 */}
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail"/>
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  )

};

export default NewsItem;