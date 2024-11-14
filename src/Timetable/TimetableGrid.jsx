// src/Timetable/TimetableGrid.jsx
import React from 'react';
import './timetable.css';

const TimetableGrid = () => {
    const hours = Array.from({ length: 12 }, (_, i) => 9 + i); // 9시부터 20시까지
    const days = ['월', '화', '수', '목', '금'];

    // 더미데이터 넣는곳
    const lectureData = [
        { day: 1, class_time: "01A", duration: 2, color: '#81C784', title: '컴퓨터네트워크', instructor: '주홍택' },
        { day: 3, class_time: "03A", duration: 5, color: '#64B5F6', title: '데이터베이스프로그래밍', instructor: '홍동권' },
        { day: 5, class_time: "07A", duration: 1.9, color: '#FFAB91', title: '프로그래밍기초', instructor: '사공상욱'},
        { day: 2, class_time: "04A", duration: 4, color: '#FFCC80', title: '컴퓨터공학캡스톤디자인(1)', instructor: '홍동권' },
        { day: 1, class_time: "05A", duration: 1.25, color: '#FF8A65', title: '데이터베이스', instructor: '홍동권' },
    ];

    // class_time 코드를 시간과 분으로 변환
    const getTimeFromClassTime = (classTime) => {
        const timeMap = {
            "01A": { hour: 9, minutes: 0 },
            "01B": { hour: 9, minutes: 30 },
            "02A": { hour: 10, minutes: 0 },
            "02B": { hour: 10, minutes: 30 },
            "03A": { hour: 11, minutes: 0 },
            "03B": { hour: 11, minutes: 30 },
            "04A": { hour: 12, minutes: 0 },
            "04B": { hour: 12, minutes: 30 },
            "05A": { hour: 13, minutes: 0 },
            "05B": { hour: 13, minutes: 30 },
            "06A": { hour: 14, minutes: 0 },
            "06B": { hour: 14, minutes: 30 },
            "07A": { hour: 15, minutes: 0 },
            "07B": { hour: 15, minutes: 30 },
            "08A": { hour: 16, minutes: 0 },
            "08B": { hour: 16, minutes: 30 },
            "09A": { hour: 17, minutes: 0 },
            "09B": { hour: 17, minutes: 30 },
        };
        return timeMap[classTime];
    };

    return (
        <div className="timetable">
            <div className="timetable-header">
                <div className="timetable-time"></div>
                {days.map((day, index) => (
                    <div key={index} className="timetable-day">{day}</div>
                ))}
            </div>

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
                const { hour, minutes } = getTimeFromClassTime(lecture.class_time);
                const top = (hour - 8.45) * 100 + (minutes / 60) * 100; // 시간에 따른 y 위치
                const left = (lecture.day - 0.975) * 150 + 100; // 요일에 따른 x 위치, 100px은 시간 열
                const height = lecture.duration * 99.5; // duration에 따른 높이

                return (
                    <div
                        key={index}
                        className="lecture-block"
                        style={{
                            backgroundColor: lecture.color,
                            top: `${top}px`,
                            left: `${left}px`,
                            height: `${height}px`,
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
