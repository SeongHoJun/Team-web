// src/pages/FAQ/FAQWEB.jsx
import React from 'react';
import './FAQ.css';

function FAQWEB() {
  return (
    <div className="faq-page">
      {/* 상단 네비게이션 */}
      <header className="navbar">
        <img src="/logo.png" alt="Keimyung University Logo" className="logo" />
        <h1 className="navbar-title">문의하기</h1>
      </header>

      {/* 가로 구분선 */}
      <div className="divider-horizontal"></div>

      <div className="faq-content">
        {/* 자주 묻는 질문 섹션 */}
        <section className="faq-section">
          <h2>자주 묻는 질문</h2>
          <div className="search-bar">
            <input type="text" placeholder="검색할 키워드를 입력해주세요" />
            <button>🔍</button>
          </div>
          <div className="faq-list">
            <div className="faq-item">질문 1</div>
            <div className="faq-item">질문 2</div>
            <div className="faq-item">질문 3</div>
            <div className="faq-item">질문 4</div>
          </div>
        </section>

        {/* 세로 구분선 */}
        <div className="divider"></div>

        {/* 사용자 정보 섹션 */}
        <aside className="user-info">
          <div className="user-profile">
            <div className="user-name">닉네임</div>
            <button className="logout-button">로그아웃</button>
          </div>
          
          {/* 서비스 진행도 섹션 */}
          <div className="service-progress">
            <h2>서비스 진행도</h2>
            <div className="service-status">
              <div className="status-item">
                <span>처리 중</span>
                <span></span>
              </div>
              <div className="status-item">
                <span>평가 대기</span>
                <span></span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default FAQWEB;
