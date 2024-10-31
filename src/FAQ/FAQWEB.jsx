// src/pages/FAQ/FAQWEB.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';
import Layout from "../Layout/Layout";

function FAQWEB() {
  return (
    <Layout>
    <div className="faq-page">
      {/* 상단 네비게이션 */}
      <header className="faq-navbar">
        <img src="/logo.png" alt="Keimyung University Logo" className="faq-logo" />
        <h1 className="faq-navbar-title">문의하기</h1>
      </header>

      {/* 가로 구분선 */}
      <div className="faq-divider-horizontal"></div>

      <div className="faq-content">
        {/* 자주 묻는 질문 섹션 */}
        <section className="faq-section">
          <h2>자주 묻는 질문</h2>
          <div className="faq-search-bar">
            <input type="text" placeholder="검색할 키워드를 입력해주세요" />
            <button>🔍</button>
          </div>
          <div className="faq-list">
            <div className="faq-item">키워드 1</div>
            <div className="faq-item">키워드 2</div>
            <div className="faq-item">키워드 3</div>
            <div className="faq-item">키워드 4</div>
          </div>
        </section>

        {/* 세로 구분선 */}
        <div className="faq-divider"></div>

        {/* 사용자 정보 섹션 */}
        <aside className="faq-user-info">
          <div className="faq-user-profile">
            {/* 닉네임 클릭 시 마이페이지로 이동 */}
            <Link to="/mypage" className="user-name">닉네임</Link>
            <button className="faq-logout-button">로그아웃</button>
          </div>
          
          {/* 서비스 진행도 섹션 */}
          <div className="faq-service-progress">
            <h2>서비스 진행도</h2>
            <div className="faq-service-status">
              <div className="faq-status-item">
                <span>처리 중</span>
                <span></span>
              </div>
              <div className="faq-status-item">
                <span>평가 대기</span>
                <span></span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
    </Layout>
  );
}

export default FAQWEB;
