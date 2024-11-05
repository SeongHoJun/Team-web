import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FAQWEB from './FAQ/FAQWEB';
import MyPage from './MyPage/mypage';
import Loading from './Loading/Loading';
import TimetableList from './Timetablelist/timetablelist';
import TimetableView from './Timetableview/timetableview';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/faq" element={<FAQWEB />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/loading" element={<Loading />} /> {/* /loading 경로 추가 */}
          <Route path="/timetablelist" element={<TimetableList />} /> {/* TimetableList 경로 추가 */}
          <Route path="/timetableview" element={<TimetableView />} /> {/* TimetableView 경로 추가 */}
          <Route path="/" element={<FAQWEB />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
