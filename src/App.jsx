// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FAQWEB from './FAQ/FAQWEB';
import MyPage from './MyPage/mypage';
import Loading from './Loading/Loading'; // Loading 컴포넌트 임포트
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/faq" element={<FAQWEB />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/loading" element={<Loading />} /> {/* /loading 경로 추가 */}
          {/* 기본 경로에서 /faq로 리다이렉트 */}
          <Route path="/" element={<FAQWEB />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
