// 1. 가상의 데이터(sampleArticles)를 사용하여 뉴스 리스트를 렌더링하는 컴포넌트
// 2. useEffect를 사용하여 컴포넌트가 처음 렌더링되는 시점에 API를 요청
//    => useEffect 내부에서 비동기 함수를 사용: async/await 문법을 사용하여 비동기 작업을 처리

// import React, {useState, useEffect} from "react";
import React from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";
import usePromise from "../lib/usePromise";

// 가상의 데이터
/* const sampleArticles = {
  title: '제목',
  description: '내용',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160', //이미지가 없을 때 대체 이미지
} */

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    };
`

const NewsList = ({category}) => {
/*   const [articles, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);  // API 요청이 대기 중인지 판별(true: 대기중, false: 완료)
  
  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);  // 로딩 시작(요청 대기 중)
      try {
        const query = category === 'all'? '': `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=aa45e6fdfa0642a28c655e3c1d996977`
        );
        setArticle(response.data.articles);  //조회 데이터로 articles 설정(articles 상태 변경)
      } catch (e) {
        console.log(e);
      }
      setLoading(false); // 로딩 완료
    };

    fetchData();  //fetchDate함수 호출(API 요청 함수 호출)
  }, [category]);  //categroy 바뀔때마다 뉴스를 새로 불러옴 */

  // .env에서 API key 설정
  const key = process.env.REACT_APP_NEWS_KEY

  const [loading, response, error] = usePromise(() => {
    const query = category === 'all'? '': `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${key}`
        
      );
  }, [category]);
  

  // 대기 중일 때
  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

/*   // 아직 articles 값이 설정되지 않았을 때
  if (!articles) {
    return null;
  } */

  // 아직 response 값이 설정되지 않았을 때
  if (!response) {
    return null;
  }

  // 에러가 발생했을 때
  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>
  }

  // response 값이 유효할 때
  const { articles } = response.data;

  return (
    <NewsListBlock>
      {/* <NewsItem article={sampleArticles}/>*/} {/* 가상의 데이터를 사용하여 뉴스 아이템을 보여줌 */}
        {articles.map(article => (
          <NewsItem key={article.url} article={article}/>
        ))}
    </NewsListBlock>
  );
};

export default NewsList;