import React from 'react';
import './timetablelist.css';
import Layout from "../Layout/Layout";


const TimetableList = () => {
  return (
    <Layout>
    <div className="timetable-container">
      <h2 className="timetable-title">원하는 시간표를 선택해 주세요!</h2>
      <div className="timetable-options">
        <div className="timetable-option">
          <div className="timetable-label">시간표 1</div>
          <div className="timetable-content"></div>
        </div>
        
        <div className="timetable-divider"></div>

        <div className="timetable-option">
          <div className="timetable-label">시간표 2</div>
          <div className="timetable-content"></div>
        </div>
        
        <div className="timetable-divider"></div>

        <div className="timetable-option">
          <div className="timetable-label">시간표 3</div>
          <div className="timetable-content"></div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default TimetableList;
