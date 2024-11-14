import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FAQWEB from './FAQ/FAQWEB';
import MyPage from './MyPage/mypage';
import Loading from './Loading/Loading';
import TimetableList from './Timetablelist/timetablelist';
import TimetableView from './Timetableview/timetableview';
import TimetableGrid from './Timetable/TimetableGrid'; // TimetableGrid로 변경
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/faq" element={<FAQWEB />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/timetablelist" element={<TimetableList />} />
          <Route path="/timetableview" element={<TimetableView />} />
          <Route path="/timetable" element={<TimetableGrid />} /> {/* TimetableGrid 컴포넌트 사용 */}
          <Route path="/" element={<FAQWEB />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
