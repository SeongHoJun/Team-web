import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FAQWEB from './FAQ/FAQWEB';
import MyPage from './MyPage/mypage';
import Loading from './Loading/Loading';
import TimetableDataSet from './Timetable/TimetableDataSet';
import TimetableCheck from './Timetable/timetableCheck'; // timetableCheck 컴포넌트 추가

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/faq" element={<FAQWEB />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/timetable" element={<TimetableDataSet />} /> {/* TimetableDataSet 경로 */}
          <Route path="/timetablecheck" element={<TimetableCheck />} /> {/* timetableCheck 경로 */}
          <Route path="/" element={<FAQWEB />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
