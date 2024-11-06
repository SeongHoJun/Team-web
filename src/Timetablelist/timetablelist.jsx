import React from 'react';
import './timetablelist.css';
import Layout from "../Layout/Layout";

const TimetableList = () => {
  const days = ['월', '화', '수', '목', '금', '토'];
  const timeSlots = [9, 10, 11, 12, 1, 2, 3, 4, 5]; // 시간대

  const timetableData = [
    { day: '화', time: 9, title: "프로그래밍 언어론", room: "공3017" },
    { day: '화', time: 10, title: "자동차 인공지능", room: "공1217" },
    { day: '화', time: 12, title: "캡스톤디자인", room: "공1320" },
    { day: '금', time: 3, title: "프로그래밍 언어론", room: "공3017" },
    { day: '금', time: 4, title: "자동차 인공지능", room: "공1217" }
  ];

  return (
    <Layout>
      <div className="timetablelist-container">
        <h2 className="timetablelist-title">원하는 시간표를 선택해 주세요!</h2>
        <div className="timetablelist-options">
          {["시간표 1", "시간표 2", "시간표 3"].map((label, idx) => (
            <React.Fragment key={idx}>
              <div className="timetablelist-option">
                <div className="timetablelist-label">{label}</div>
                <div className="timetablelist-content">
                  <div className="timetablelist-grid">
                    {/* 요일 헤더 */}
                    <div className="timetablelist-header"></div>
                    {days.map((day, index) => (
                      <div key={index} className="timetablelist-header">{day}</div>
                    ))}

                    {/* 시간대와 강의 셀 */}
                    {timeSlots.map((time) => (
                      <React.Fragment key={`time-${time}`}>
                        <div className="timetablelist-time-slot">{time}</div>
                        {days.map((day) => {
                          const classData = timetableData.find(
                            (classItem) => classItem.day === day && classItem.time === time
                          );
                          return classData ? (
                            <div key={`${day}-${time}`} className="timetablelist-class-cell">
                              <span>{classData.title}</span>
                              <span>{classData.room}</span>
                            </div>
                          ) : (
                            <div key={`${day}-${time}`} className="timetablelist-time-slot"></div>
                          );
                        })}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* 시간표 옵션 사이에 구분선 추가 */}
              {idx < 2 && <div className="timetablelist-divider"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TimetableList;
