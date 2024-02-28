import React from "react";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";
import { useParams } from "react-router-dom";

const NewsPage = () => {
  const params = useParams();

  // category가 선택되지 않았다면 기본값은 'all'
  const category = params.category || 'all';
  
  return (
    <>
    <Categories/>
    <NewsList category={category}/>
    </>
  )
}

export default NewsPage;