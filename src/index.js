import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // App.js는 component
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // html태그가 return됨
  <React.StrictMode>
    {/* 사용자 정의태그 - 종료태그 필수*/}
    <App />  {/* component명은 대문자로 작성(일반 html태그와 구분하기 위해서) */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);  성능과 관련된 함수
