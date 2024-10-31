// src/pages/MyPage/mypage.jsx

import React from 'react';
import './mypage.css';
import Layout from "../Layout/Layout";

function MyPage() {
  return (
    <Layout>
    <div className="mypage-container">
      <h1 className="mypage-profile-title">프로필 수정</h1>
      <p className="mypage-profile-subtitle">자신의 프로필을 수정할 수 있습니다</p>
      
      <div className="mypage-form-container">
        <div className="mypage-form-group">
          <label>아이디</label>
          <input type="text" placeholder="아이디" disabled />
        </div>

        <div className="mypage-form-group">
          <label>현재 비밀번호</label>
          <input type="password" placeholder="현재 비밀번호" />
        </div>

        <div className="mypage-form-group">
          <label>변경할 비밀번호</label>
          <input type="password" placeholder="변경할 비밀번호" />
        </div>

        <div className="mypage-form-group">
          <label>비밀번호 재확인</label>
          <input type="password" placeholder="비밀번호 재확인" />
        </div>

        <div className="mypage-form-group">
          <label>이름</label>
          <input type="text" placeholder="이름" />
        </div>

        <div className="mypage-form-group">
          <label>이메일</label>
          <input type="email" placeholder="이메일" />
        </div>

        <button className="mypage-submit-btn">확인</button>
      </div>
    </div>
    </Layout>
  );
}

export default MyPage;
