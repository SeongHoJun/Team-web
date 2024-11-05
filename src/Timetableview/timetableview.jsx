import React from 'react';
import './timetableview.css';
import Layout from "../Layout/Layout";


const TimetableView = () => {
  return (
    <Layout>
    <div className="timetableview-container">
      <div className="timetableview-header">
        <button className="timetableview-close-btn">×</button>
        <div className="timetableview-title">시간표 1</div>
        <button className="timetableview-pdf-save-btn">PDF 저장</button>
      </div>
      <div className="timetableview-content">
        {/*시간표 받아서 내용 추가하는 곳*/}
      </div>
    </div>
    </Layout>
  );
};

export default TimetableView;
