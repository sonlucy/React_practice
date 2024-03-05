import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';  // 디덕스 프로젝트에 적용하기 위한 프로바이더
import { createStore } from 'redux'  // 스토어 생성 함수
import { composeWithDevTools } from 'redux-devtools-extension';  // 리덕스 개발자 도구
import rootReducer from './modules';

// 스토어 생성
const store = createStore(rootReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 리액트 프로젝트에 스토어 적용
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);