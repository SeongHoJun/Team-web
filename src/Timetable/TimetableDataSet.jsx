import React from 'react';
import TimetableGrid from './TimetableGrid';
import './timetable.css';

const TimetableDataSet = () => {
    // 더미데이터 넣는곳
    const timetableData = [
        [
            { day: 1, class_time: "05A", duration: 1.5, color: '#81C784', title: '컴퓨터네트워크', instructor: '주홍택' },
            { day: 3, class_time: "03A", duration: 5, color: '#64B5F6', title: '데이터베이스프로그래밍', instructor: '홍동권' },
        ],
        [
            { day: 5, class_time: "07A", duration: 2, color: '#FFAB91', title: '프로그래밍기초', instructor: '사공상욱' },
            { day: 2, class_time: "04B", duration: 3.9, color: '#FFCC80', title: '컴퓨터공학캡스톤디자인(1)', instructor: '홍동권' },
        ],
        [
            { day: 1, class_time: "05A", duration: 1.25, color: '#FF8A65', title: '데이터베이스', instructor: '홍동권' },
        ],
    ];

    return (
        <div className="tables-wrapper">
            {timetableData.map((data, index) => (
                <div className="timetable-container" key={index}>
                    <button>시간표 {index + 1} 선택하기</button>
                    {/* 데이터 전달 */}
                    <TimetableGrid lectureData={data} />
                </div>
            ))}
        </div>
    );
};

export default TimetableDataSet;
