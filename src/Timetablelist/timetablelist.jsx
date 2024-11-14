import React from 'react';
import './timetablelist.css'; // CSS 스타일
import Layout from "../Layout/Layout"; // 레이아웃
import { useNavigate } from 'react-router-dom';

const TimetableList = () => {
  const days = ['월', '화', '수', '목', '금', '토'];
  const timeSlots = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  
  const timetableData1 = [
    { day: '화', time: 9, endTime: 10.15, title: "프로그래밍언어론", room: "공3017" },
    { day: '화', time: 11.4, endTime: 16.2, title: "컴퓨터공학캡스톤디자인(1)", room: "공1320"},
  ];

  const timetableData2 = [
    { day: '월', time: 9, endTime: 10.15, title: "데이터베이스", room: "공2010" },
  ];

  const timetableData3 = [
    { day: '금', time: 10.25, endTime: 11.5, title: "컴퓨터네트워크", room: "공1402" },
  ];

  const navigate = useNavigate();
  const handleTimetableClick = (timetableData) => {
    navigate('/timetableview', { state: { timetableData } });
  };

  const labels = ["시간표 1 선택하기", "시간표 2 선택하기", "시간표 3 선택하기"];
  const timetableData = [timetableData1, timetableData2, timetableData3];

  return (
    <Layout>
      <div className="timetablelist-container">
        <h2 className="timetablelist-title">원하는 시간표를 선택해 주세요!</h2>
        <div className="timetablelist-options">
          {labels.map((label, idx) => (
            <React.Fragment key={idx}>
              <div className="timetablelist-option-wrapper">
                <button
                  className="timetablelist-button"
                  onClick={() => handleTimetableClick(timetableData[idx])}
                >
                  {label}
                </button>
                <div className="timetablelist-option">
                  <div className="timetablelist-grid">
                    <div className="timetablelist-header"></div>
                    {days.map((day, index) => (
                      <div key={index} className="timetablelist-header">{day}</div>
                    ))}
                    {timeSlots.map((time) => (
                      <React.Fragment key={`time-${time}`}>
                        <div className="timetablelist-time-slot">{time}</div>
                        {days.map((day) => (
                          <div key={`${day}-${time}`} className="timetablelist-time-slot"></div>
                        ))}
                      </React.Fragment>
                    ))}
                    {timetableData[idx].map((classItem) => {
                      const { day, time, endTime, title, room } = classItem;
                      const dayIndex = days.indexOf(day);

                      const startHour = Math.floor(time);
                      const startMinute = Math.round((time % 1) * 60); // 소수점 부분을 60분 단위로 변환
                      const endHour = Math.floor(endTime);
                      const endMinute = Math.round((endTime % 1) * 60); // 소수점 부분을 60분 단위로 변환

                      const timeSlotHeightPercentage = 100 / timeSlots.length;

                      // 셀의 위치 및 길이 계산
                      const top = ((startHour - timeSlots[0]) + (startMinute / 60)) * timeSlotHeightPercentage + "%";
                      const height = ((endHour - startHour) + (endMinute - startMinute) / 60) * timeSlotHeightPercentage + "%";

                      const left = `${(dayIndex + 1) * (100 / 7)}%`;

                      return (
                        <div
                          key={`${day}-${time}`}
                          className="timetablelist-class-cell"
                          style={{
                            top,
                            left,
                            height,
                            width: `calc(100% / 7 - 2px)`,
                          }}
                        >
                          <span>{title}</span>
                          <span>{room}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              {idx < labels.length - 1 && <div className="timetablelist-divider"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TimetableList;
