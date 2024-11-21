import React from 'react';
import './timetable.css';

const TimetableGrid = ({ lectureData }) => {
    const hours = Array.from({ length: 12 }, (_, i) => 9 + i); // 9시부터 20시까지
    const days = ['월', '화', '수', '목', '금'];

    // 시간 문자열을 분 단위로 변환하는 함수
    const timeToMinutes = (time) => {
        const [hour, minute] = time.split(':').map(Number);
        return hour * 60 + minute;
    };

    return (
        <div className="timetable">
            {/* 시간표 헤더 */}
            <div className="timetable-header">
                <div className="timetable-time"></div>
                {days.map((day, index) => (
                    <div key={index} className="timetable-day">{day}</div>
                ))}
            </div>

            {/* 시간표 그리드 */}
            {hours.map((hour) => (
                <React.Fragment key={hour}>
                    <div className="timetable-time">{`${hour}:00`}</div>
                    {days.map((_, dayIndex) => (
                        <div key={dayIndex} className="timetable-cell"></div>
                    ))}
                </React.Fragment>
            ))}

            {/* 강의 블록 렌더링 */}
            {lectureData.map((lecture, index) => {
                const startMinutes = timeToMinutes(lecture.startTime);
                const endMinutes = timeToMinutes(lecture.endTime);
                const durationMinutes = endMinutes - startMinutes;

                const top = ((startMinutes - 540) / 60) * 100 + 50; // 540 = 9:00 AM (위치에 맞게 하기 위해 +50 추가)
                const left = (lecture.day - 1) * 150 + 100; // 요일에 따른 x 위치
                const height = (durationMinutes / 60) * 100; // 분 단위를 px로 변환

                return (
                    <div
                        key={index}
                        className="lecture-block"
                        style={{
                            position: 'absolute',
                            backgroundColor: lecture.color,
                            top: `${top}px`,
                            left: `${left}px`,
                            height: `${height}px`,
                            width: '145px', // 고정된 블록 너비
                        }}
                    >
                        <span>{lecture.title}</span>
                        <span>{lecture.instructor}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default TimetableGrid;
