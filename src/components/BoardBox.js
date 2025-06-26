import React from 'react';

function BoardBox() {
  return (
    <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 4px rgba(0,0,0,0.04)', padding: 24, marginBottom: 24 }}>
      <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 16 }}>게시판</div>
      <ul style={{ padding: 0, margin: 0, listStyle: 'none', color: '#222', fontSize: 15 }}>
        <li><b>[공지]</b> 2025-06-26 : 전사 시스템 점검 안내</li>
        <li>2025-06-25 : 7월 휴가 신청 안내</li>
        <li>2025-06-24 : 사내 보안 교육 일정</li>
        <li>2025-06-23 : 신규 입사자 환영</li>
        <li style={{ color: '#bbb', fontSize: 13, marginTop: 8 }}>※ 실제 연동/탭/슬라이드는 추후 구현</li>
      </ul>
    </div>
  );
}

export default BoardBox;
