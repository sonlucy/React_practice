import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import ToggleThemeButton from './component/ToggleThemeButton';
import Hero from './component/Hero';
import ResultContainer from './component/ResultContainer';
import Footer from './component/Footer';
import getWallPapers from './api/getWallPapers';
import EmptyResult from './component/EmptyResult';
import './App.css';

const Container = styled.div`
    position: relative;
    background-color: var(--primary);
    min-height: 100vh;
`;

function App() {
  const [data, setData] = useState({});
  const [query, setQuery] = useState('');
  const [orientation, setOrientation] = useState('all');
  const [order, setOrder] = useState('popular');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const numOfPages = data.totalHits ? Math.ceil(data.totalHits / perPage) : 0;
  const target = useRef(null);

  useEffect(() => {
    const fetch = async () => {
      const data = await getWallPapers({
        q: query,    // 검색어 변경
        orientation: orientation,
        order: order,
        page: page,
        per_page: perPage,
      });
      if (page === 1) {
        setData(data);
      } else {
        setData((prevData) => ({
          ...prevData,
          hits: [...prevData.hits, ...data.hits],
        }));
      }
    }
    fetch();
  }, [query, orientation, order, page, perPage]);

  const callback = ([entries]) => {
    if (entries.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  };

  // 무한 스크롤
  useEffect(() => {
    if (!target.current) return;
    const observer = new IntersectionObserver(callback, {
      threshold: 1,
    });
    observer.observe(target.current);
  }, []);

  // 초기화
  useEffect(() => {
    setPage(1);
  }, [query, orientation, order, perPage]);


  return (
    <>
      <Container>
        <Hero
          setQuery={setQuery}
          setOrder={setOrder}
          setOrientation={setOrientation}
          setPerPage={setPerPage}
        />
        <ResultContainer
          data={data}
          page={page}
          setPage={setPage}
          numOfPages={numOfPages}
        />
        {page !== numOfPages && (
          <div ref={target}>
            <EmptyResult isLoading={data.totalHits} />
          </div>
        )}
        <Footer />
        <ToggleThemeButton />
      </Container>
    </>
  );
}

export default App;
