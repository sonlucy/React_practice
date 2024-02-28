// 1. 가상의 데이터(sampleArticles)를 사용하여 뉴스 리스트를 렌더링하는 컴포넌트
// 2. useEffect를 사용하여 컴포넌트가 처음 렌더링되는 시점에 API를 요청
//    => useEffect 내부에서 비동기 함수를 사용: async/await 문법을 사용하여 비동기 작업을 처리

import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';


// 가상의 데이터
// const sampleArticles = {
//   title: '제목',
//   description: '내용',
//   url: 'https://google.com',
//   urlToImage: 'https://via.placeholder.com/160',  // 이미지가 없을 때 대체 이미지
// }

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    /* @media  */
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    };
`;


const NewsList = ({category}) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
        try {
            const key = process.env.REACT_APP_NEWS_KEY;
            const query = category === 'all' ? '' : `&category=${category}`;
            const response = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${key}`
            );
            setArticles(response.data.articles);
        } catch (e) {
            console.log(e);
        }
        setLoading(false);
    };
    fetchData();
}, [category]);

  if (loading) {
      return <NewsListBlock>대기 중...</NewsListBlock>;
  }
  if (!articles){
      return null;
  }

  return (
      <NewsListBlock>
      {articles.map(article => (
          <NewsItem key={article.url} article={article} />
      ))}
      </NewsListBlock>
  );
};

export default NewsList;